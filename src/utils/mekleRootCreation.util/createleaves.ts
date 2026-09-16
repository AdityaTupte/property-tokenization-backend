import type { PublicKey } from "jsonwebtoken";
import { SnapshotRequestedSchema } from "../../idl.schema/generated/SnapshotRequested.schema";
import { eventDecoder } from "../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { prisma } from "../../prismaclient";
import type { EventData } from "../../types&interface/solanaLogParser.interface";
import type BN from "bn.js";

function buildSellProposalLeaf(
  holder: PublicKey,
  proposal: PublicKey,
  governanceMint: PublicKey,
  votingPower: number | bigint | BN
): Buffer {
  return keccakBuffer([
    Buffer.from("SELLPROPERTY"),
    holder.toBuffer(),
    proposal.toBuffer(),
    governanceMint.toBuffer(),
    toU64LeBuffer(votingPower),
  ]);
}










export const createMerkleLeavesFromTokenBalance = async(event:EventData[]) =>{


    const decodedData = eventDecoder.decode(event[0]?.raw!);

    const data = SnapshotRequestedSchema.parse(decodedData)

    const BATCH_SIZE = 10_000;

let lastId: bigint | undefined = undefined;

while (true) {
  const tokenHolders = await prisma.tokenHolder.findMany({
    take: BATCH_SIZE,

    ...(lastId !== undefined && {
      skip: 1,
      cursor: {
        id: lastId,
      },
    }),

    orderBy: {
      id: "asc",
    },

    where: {
      mint: data.mint,
      slot: data.slot //FIXME slot condition
    },
  });

  if (tokenHolders.length === 0) {
    break;
  }

 

  // Process this batch
  for (const holder of tokenHolders) {

    const leavesHolder = buildSellProposalLeaf(holder.holder,data.proposal_key,data.mint,holder.balance)   
 

  }

  lastId = tokenHolders[tokenHolders.length - 1].id;
}




}