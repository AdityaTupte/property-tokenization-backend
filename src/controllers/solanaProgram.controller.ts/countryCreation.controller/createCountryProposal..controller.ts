import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { create_country_proposalSchema } from "../../../idl.schema/generated/create_country_proposal.schema";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
export const handleCreateCountryProposal: InstructionHandler = async (
  message: messageSchema,
  instruction: instructionsSchema,
  ctx: TransactionContext,
  BlockTime: number
) => {
  const proposal = address(message.accountKeys[instruction.accounts[1]!]!);

//   const proposalAccount = (await GenericPda(

 

  const bytes = Buffer.from(bs58.decode(instruction.data));
  
  const decodedData = decoder.decode(bytes)

  const argument = create_country_proposalSchema.parse(decodedData);

const cleanCountryName = argument.country_name.toString().replace(/\0/g, "").trim();


  ctx.add(async (tx) => {
    await tx.countryProposal.create({
      data: {
        proposal_public_key: proposal.toString(),
        total_authority: argument.total_authority,
        country_id: argument.country_id,
        country_pda_threshold: argument.country_pda_threshold,
        approved: false,
        executed: false,
        country_name: cleanCountryName,
        proposal_created_time: new Date(BlockTime),
      },
    });
  });
};
