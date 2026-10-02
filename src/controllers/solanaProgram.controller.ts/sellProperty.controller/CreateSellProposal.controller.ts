import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
  metaSchema,
} from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { create_sell_proposalSchema } from "../../../idl.schema/generated/create_sell_proposal.schema";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/errors/ApiError";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
export const handleSellPropertyProposal: InstructionHandler = async (
  TransactionAccountskey: string[],
  instruction: instructionsSchema,
  ctx: TransactionContext,
  BlockTime: number,
  meta: CompletedExecution
) => {
  const proposalAddress = address(
    TransactionAccountskey.at(instruction.accounts[2]!)!
  );

  const propertySystem = address(
    TransactionAccountskey.at(instruction.accounts[3]!)!
  );

  const bytes = Buffer.from(bs58.decode(instruction.data));

  const decodedData = decoder.decode(bytes);

  const args = create_sell_proposalSchema.parse(decodedData);

  // const ProposalAccountPda = (await GenericPda(
  //   "propertySellProposal",
  //   proposalAddress
  // )) as any;

  // const ProposalAccount: PdaTypes.propertySellProposalType = {
  //   ...ProposalAccountPda,
  //   status: ProposalAccountPda.status as unknown as PdaTypes.StatusVariant,
  //   proposalType:
  //     ProposalAccountPda.proposalType as unknown as PdaTypes.ProposalVariant,
  // };

  const propertySystemAddress = address(
    TransactionAccountskey.at(instruction.accounts[3]!)!
  ).toString();

  const treasuryAddress = address(
    TransactionAccountskey.at(instruction.accounts[4]!)!
  ).toString();

  const governance_mint_token_supply =
    await prisma.propertySystemAccount.findFirst({
      where: {
        property_system_public_key: propertySystemAddress.toString(),
      },
      select: {
        governanceMintAccount: {
          select: { tokenSupply: true },
        },
      },
    });

  if (!governance_mint_token_supply)
    throw new ApiError(409, "governance mint data not available");

  const totalVotingPower =
    governance_mint_token_supply.governanceMintAccount?.tokenSupply;
  if (totalVotingPower === undefined) {
    throw new ApiError(409, "governance mint token supply not available");
  }

  ctx.add(async (tx) => {
    tx.propertySellProposal.create({
      data: {
        proposal_id: args.property_id,
        proposal_key: proposalAddress.toString(),
        property_account: propertySystemAddress,
        sale_price: args.sale_price,
        deposit_account_pda: treasuryAddress,
      },
    });

    tx.proposals.create({
      data: {
        property_system: propertySystem.toString(),
        proposal_key: proposalAddress.toString(),
        status: "Draft",
        proposal_type: "SELLPROPERTY",
        total_voting_power: totalVotingPower,
        created_at: new Date(BlockTime),
        
      },
    });
  });
};
