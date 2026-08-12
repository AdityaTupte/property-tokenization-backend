import { address } from "@solana/kit";
import type {
  Instructions,
  messageSchema,
} from "../../../helius/findProgramIndex";

import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleSellPropertyProposal: InstructionHandler = async (
  message: messageSchema,
  instruction: Instructions,
  ctx: TransactionContext,
  BlockTime: number
) => {
  const proposalAddress = address(
    message.accountKeys[instruction.accounts[2]!]!
  );

  const ProposalAccountPda = (await GenericPda(
    "propertySellProposal",
    proposalAddress
  )) as any;

  const ProposalAccount: PdaTypes.propertySellProposalType = {
    ...ProposalAccountPda,
    status: ProposalAccountPda.status as unknown as PdaTypes.StatusVariant,
    proposalType:
      ProposalAccountPda.proposalType as unknown as PdaTypes.ProposalVariant,
  };

  const propertySystemAddress = address(
    message.accountKeys[instruction.accounts[3]!]!
  ).toString();

  const treasuryAddress = address(
    message.accountKeys[instruction.accounts[4]!]!
  ).toString();


  ctx.add(async (tx) => {
    tx.propertySellProposal.create({
      data: {
        proposal_id: ProposalAccount.proposalId.toNumber(),
        proposal_key: proposalAddress.toString(),
        property_account: propertySystemAddress,
        sale_price: BigInt(ProposalAccount.salePrice.toString()),
        deposit_account_pda: treasuryAddress,
        transfer_deadline: new Date(
          ProposalAccount.transferDeadline.toNumber()
        ),
        property_system: ProposalAccount.propertySystemAccount.toString(),
      },
    });

    tx.proposals.create({
      data: {
        proposal_key: proposalAddress.toString(),
        status: "Draft",
        proposal_type: "SELLPROPERTY",
        total_voting_power:BigInt(ProposalAccount.totalVotingPower.toString()),
         created_at: new Date(BlockTime),
      },
    });
  });
};
