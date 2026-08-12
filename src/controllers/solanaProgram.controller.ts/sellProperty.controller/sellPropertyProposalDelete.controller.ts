import { address } from "@solana/kit";
import type {
  Instructions,
  messageSchema,
} from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleSellPropertyProposalDelete: InstructionHandler = async (
  message: messageSchema,
  instruction: Instructions,
  ctx: TransactionContext,
  BlockTime: number
) => {
  const proposalAddress = address(
    message.accountKeys[instruction.accounts[1]!]!
  );

  const ProposalAccountPda = (await GenericPda(
    "propertySellProposal",
    proposalAddress
  )) as any;

  const signer = address(
    message.accountKeys[instruction.accounts[0]!]!
  ).toString();
  
  ctx.add(async (tx) =>{

    tx.proposals.update({
        where:{
            proposal_key:proposalAddress.toString()
        },
        data:{
            status:"Deleted",
            deleted:{
            signer : signer,
            time : new Date(BlockTime.toString())
            }
        }
    })

  } )




};
