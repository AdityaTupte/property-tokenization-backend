import { PublicKey } from "@solana/web3.js";
import { Prisma, ProposalType } from "../../generated/prisma/client";
import { SnapshotRequestedSchema } from "../../idl.schema/generated/SnapshotRequested.schema";
import { eventDecoder } from "../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { prisma } from "../../prismaclient";
import type { EventData } from "../../types&interface/solanaLogParser.interface";
import BN from "bn.js";
import { keccak_256 } from "@noble/hashes/sha3";
import { snapshot } from "node:test";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueueConsumer.controller";

function keccakBuffer(parts: ReadonlyArray<Buffer | Uint8Array>): Buffer {
  return Buffer.from(
    keccak_256(Buffer.concat(parts.map((part) => Buffer.from(part))))
  );
}

function buildProposalLeaf(
  holder: PublicKey,
  proposal: PublicKey,
  governanceMint: PublicKey,
  votingPower: number | bigint | BN,
  proposalType: string
): Buffer {
  return keccakBuffer([
    Buffer.from(proposalType),
    holder.toBuffer(),
    proposal.toBuffer(),
    governanceMint.toBuffer(),
    toU64LeBuffer(votingPower),
  ]);
}

function toU64LeBuffer(value: number | bigint | BN): Buffer {
  if (BN.isBN(value)) {
    return value.toArrayLike(Buffer, "le", 8);
  }

  const buffer = Buffer.alloc(8);

  buffer.writeBigUInt64LE(BigInt(value));

  return buffer;
}



export const createMerkleLeavesFromTokenBalance = async (
  data: SnapshotRequestedType,
  proposalType: ProposalType
) => {
  

  const BATCH_SIZE = 10_000;

  let lastHolder: string | undefined = undefined;

  let nodeIndex:bigint = 0n;

  while (true) {

    const latestBalances : Awaited<ReturnType<typeof prisma.balanceHistory.findMany>> = await prisma.$queryRaw<
      { 
        id: bigint,
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
      
      WHERE "mint" = ${data.mint} 
      AND "slot" <= ${data.slot}

      ${
        lastHolder !== undefined
          ? Prisma.sql`AND "holder" > ${lastHolder}`
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

    const LeavesOfTokenHolder = latestBalances.map((holder) => {
      const leaf =  buildProposalLeaf(
        new PublicKey(holder.holder),
        new PublicKey(data.proposal_key),
        new PublicKey(data.mint),
        holder.balance,
        proposalType
      );

      const hash = new Uint8Array(leaf.length);
      hash.set(leaf);

      return { holder : holder.holder , snapshotId :  holder.slot.toString() , hash : hash,level:0, nodeIndex: nodeIndex++ }
    });


    await prisma.merkleNode.createMany({
      data:[
        ...LeavesOfTokenHolder
      ]
    })


   lastHolder = latestBalances[latestBalances.length - 1]!.holder; 

  }
};
