// import { PublicKey } from "@solana/web3.js";
// import { Prisma, ProposalType } from "../../generated/prisma/client";
// import { SnapshotRequestedSchema } from "../../idl.schema/generated/SnapshotRequested.schema";
// import { eventDecoder } from "../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
// import { prisma } from "../../prismaclient";
// import type { EventData } from "../../types&interface/solanaLogParser.interface";
// import BN from "bn.js";
// import { keccak_256 } from "@noble/hashes/sha3";
// import { snapshot } from "node:test";
// import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueueConsumer.controller";

// function keccakBuffer(parts: ReadonlyArray<Buffer | Uint8Array>): Buffer {
//   return Buffer.from(
//     keccak_256(Buffer.concat(parts.map((part) => Buffer.from(part))))
//   );
// }

// function buildProposalLeaf(
//   holder: PublicKey,
//   proposal: PublicKey,
//   governanceMint: PublicKey,
//   votingPower: number | bigint | BN,
//   proposalType: string
// ): Buffer {
//   return keccakBuffer([
//     Buffer.from(proposalType),
//     holder.toBuffer(),
//     proposal.toBuffer(),
//     governanceMint.toBuffer(),
//     toU64LeBuffer(votingPower),
//   ]);
// }

// function toU64LeBuffer(value: number | bigint | BN): Buffer {
//   if (BN.isBN(value)) {
//     return value.toArrayLike(Buffer, "le", 8);
//   }

//   const buffer = Buffer.alloc(8);

//   buffer.writeBigUInt64LE(BigInt(value));

//   return buffer;
// }

// export const createMerkleLeavesFromTokenBalance = async (
//   data: SnapshotRequestedType,
//   proposalType: ProposalType
// ) => {

//   const BATCH_SIZE = 10_000;

//   let lastHolder: string | undefined = undefined;

//   let nodeIndex:bigint = 0n;

//   while (true) {

//     const latestBalances : Awaited<ReturnType<typeof prisma.balanceHistory.findMany>> = await prisma.$queryRaw<
//       {
//         id: bigint,
//         holder: string;
//         mint: string;
//         slot: bigint;
//         balance: bigint;
//       }[]
//     >`
//     SELECT *
//     FROM (
//       SELECT DISTINCT ON ("holder")
//         "holder",
//         "mint",
//         "slot",
//         "balance"
//       FROM "BalanceHistory"

//       WHERE "mint" = ${data.mint}
//       AND "slot" <= ${data.slot}

//       ${
//         lastHolder !== undefined
//           ? Prisma.sql`AND "holder" > ${lastHolder}`
//           : Prisma.empty
//       }
//       ORDER BY
//         "holder" ASC,
//         "slot" DESC
//       ) AS latest

//       WHERE "balance" > 0
//       ORDER BY "holder" ASC
//       LIMIT ${BATCH_SIZE};
//     `;

//     if (latestBalances.length === 0) {
//       break;
//     }

//     const LeavesOfTokenHolder = latestBalances.map((holder) => {
//       const leaf =  buildProposalLeaf(
//         new PublicKey(holder.holder),
//         new PublicKey(data.proposal_key),
//         new PublicKey(data.mint),
//         holder.balance,
//         proposalType
//       );

//       const hash = new Uint8Array(leaf.length);
//       hash.set(leaf);

//       return { holder : holder.holder , snapshotId :  holder.slot.toString() , hash : hash,level:0, nodeIndex: nodeIndex++ }
//     });

//     await prisma.merkleNode.createMany({
//       data:[
//         ...LeavesOfTokenHolder
//       ]
//     })

//    lastHolder = latestBalances[latestBalances.length - 1]!.holder;

//   }
// };

import { PublicKey } from "@solana/web3.js";
import { Prisma, ProposalType } from "../../generated/prisma/client";
import { prisma } from "../../prismaclient";
import BN from "bn.js";
import { keccak_256 } from "@noble/hashes/sha3";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueue.consumer";

function keccakBuffer(parts: ReadonlyArray<Buffer | Uint8Array>): Buffer {
  return Buffer.from(
    keccak_256(Buffer.concat(parts.map((part) => Buffer.from(part))))
  );
}

function toU64LeBuffer(value: number | bigint | BN): Buffer {
  if (BN.isBN(value)) {
    return value.toArrayLike(Buffer, "le", 8);
  }

  const buffer = Buffer.alloc(8);

  buffer.writeBigUInt64LE(BigInt(value));

  return buffer;
}

/*
 * IMPORTANT:
 *
 * proposalTypeValue must be the SAME numeric
 * discriminant used by your Rust ProposalType enum.
 *
 * Example:
 *
 * Rust:
 *
 * enum ProposalType {
 *     TransferLand,  // 0
 *     BuyProperty,   // 1
 * }
 *
 * Then TransferLand = 0, BuyProperty = 1.
 */

// FIXME propsaltype

function buildProposalLeaf(
  holder: PublicKey,
  proposal: PublicKey,
  governanceMint: PublicKey,
  votingPower: number | bigint | BN,
  proposalTypeValue: number
): Buffer {
  return keccakBuffer([
    // Rust: &[*item.proposal_type() as u8]
    Buffer.from([proposalTypeValue]),

    holder.toBuffer(),

    proposal.toBuffer(),

    governanceMint.toBuffer(),

    // Rust: voting_power.to_le_bytes()
    toU64LeBuffer(votingPower),
  ]);
}

export const createMerkleLeavesFromTokenBalance = async (
  data: SnapshotRequestedType,
  proposalTypeValue: number
) => {
  const BATCH_SIZE = 10_000;

  const snapshotId = data.slot.toString();

  const mint = data.mint.toString();

  let lastHolder: string | undefined;

  let nodeIndex = 0n;

  while (true) {
    /*
     * Get latest balance of each holder
     * at or before the snapshot slot.
     */
    const latestBalances = await prisma.$queryRaw<
      {
        holder: string;
        mint: string;
        slot: bigint;
        balance: bigint;
      }[]
    >`

        SELECT *
        FROM (
          SELECT DISTINCT ON ("holder")
            "holder",
            "mint",
            "slot",
            "balance"

          FROM "BalanceHistory"

          WHERE "mint" = ${mint}
            AND "slot" <= ${data.slot}

            ${
              lastHolder !== undefined
                ? Prisma.sql`
                    AND "holder" > ${lastHolder}
                  `
                : Prisma.empty
            }

          ORDER BY
            "holder" ASC,
            "slot" DESC

        ) AS latest

        WHERE "balance" > 0

        ORDER BY "holder" ASC

        LIMIT ${BATCH_SIZE};
      `;

    if (latestBalances.length === 0) {
      break;
    }

    /*
     * Create level-0 nodes.
     */
    const leaves = latestBalances.map((holder) => {
      const leaf = buildProposalLeaf(
        new PublicKey(holder.holder),
        new PublicKey(data.proposal_key),
        new PublicKey(mint),
        holder.balance,
        proposalTypeValue
      );

      const hash = new Uint8Array(leaf.length);

      hash.set(leaf);

      return {
        snapshotId,

        mint,

        holder: holder.holder,

        hash: hash,

        level: 0,

        nodeIndex: nodeIndex++,
      };
    });

    /*
     * Store this batch.
     */
    await prisma.merkleNode.createMany({
      data: leaves,
    });

    /*
     * Cursor for next holder batch.
     */
    lastHolder = latestBalances[latestBalances.length - 1]!.holder;
  }
};
