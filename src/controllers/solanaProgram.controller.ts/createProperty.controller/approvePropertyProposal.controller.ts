import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import { GenericPda } from "../../../utils/genericPda";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";

export const handleApproveLand: InstructionHandler = async (
  message: messageSchema,
  instruction: instructionsSchema,
  ctx: TransactionContext,
  _BlockTime: number,
  log: CompletedExecution
) => {
  const PropertyProposalAddress = address(
    message.accountKeys[instruction.accounts[1]!]!
  );

  const signer = address(
    message.accountKeys[instruction.accounts[2]!]!
  ).toString();

  const PropertyProposalDb = await prisma.property.findUnique({
    where: {
      proposal_pubkey: PropertyProposalAddress.toString(),
    },
    select: {
      approval_count: true,
      approved: true,
      state: {
        select: {
          state_public_key: true,
          state_authority_threshold: true,
        },
      },
    },
  });

  if (!PropertyProposalDb) throw new ApiError(409, "PropertyPropsal not Found");

  let isApproved = false;

  if (
    PropertyProposalDb.approval_count.length + 1 ==
    PropertyProposalDb.state.state_authority_threshold
  ) {
    const PropertyProposalPda = (await GenericPda(
      "propertyProposal",
      PropertyProposalAddress
    )) as PdaTypes.PropertyProposalType;

    isApproved = PropertyProposalPda.approved == true ? true : false;
  }

  ctx.add(async (tx) => {
    tx.property.update({
      where: {
        proposal_pubkey: PropertyProposalAddress.toString(),
      },
      data: {
        approval_count: {
          push: `${signer}`,
        },
        approved: isApproved ? true : undefined,
      },
    });
  });
};
