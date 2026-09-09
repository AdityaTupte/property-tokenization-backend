import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";


export const handleApproveCountryProposal: InstructionHandler = async (
  message: messageSchema,
  instruction: instructionsSchema,
  ctx: TransactionContext,
  _BlockTime: number,
  log:CompletedExecution
) => {
  const proposal = address(message.accountKeys[instruction.accounts[0]!]!);

  const CountryProposalDb = await prisma.countryProposal.findUnique({
    where: {
      proposal_public_key: proposal.toString(),
    },
    select: {
      approved: true,
      _count: {
        select: {
          approveCountryAuthorityReceipts: true,
        },
      },
    },
  });

  if (!CountryProposalDb) throw new ApiError(404, "Country Proposal Not Found");

  const CountryApprovalAuthorityThreshold =
    await prisma.countryApprovalAuthority.findFirst({
      where: {
        id: 1,
      },
      select: {
        threshold: true,
      },
    });

  if (!CountryApprovalAuthorityThreshold)
    throw new ApiError(404, "CountryApprovalAuthority Not Found");

  let isApproved = false;

  if (
    (CountryProposalDb?._count.approveCountryAuthorityReceipts ?? 0) + 1 ===
    CountryApprovalAuthorityThreshold?.threshold
  ) {
    const proposalAccount: PdaTypes.countryProposalType = (await GenericPda(
      "proposalCountryPda",
      proposal
    )) as PdaTypes.countryProposalType;

    isApproved = proposalAccount.approved == true ? true : false;
  }

  const signer = address(message.accountKeys[instruction.accounts[3]!]!);

  const receiptAddress = address(
    message.accountKeys[instruction.accounts[2]!]!
  );

  const receiptAccount = (await GenericPda(
    "approveCountryAuthorityReceipt",
    receiptAddress
  )) as PdaTypes.approveCountryAuthorityReceiptType;

  ctx.add(async (tx) => {
    await tx.countryProposal.update({
      where: {
        proposal_public_key: proposal.toString(),
      },

      data: {
        approved: isApproved == true ? true : false,
      },
    });

    await tx.approveCountryAuthorityReceipt.create({
      data: {
        proposal_key: proposal.toString(),
        signer: signer.toString(),
      },
    });
  });
};
