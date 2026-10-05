// finalize_sell_proposal

import { address } from "@solana/kit";
import type { instructionsSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import { prisma } from "../../../prismaclient";
import { eventDecoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
import { FinalizeProposalSchema } from "../../../idl.schema/generated/FinalizeProposal.schema";


export const handlefinalizeSellProposal = async(
     TransactionAccountskey: string[],
      instruction: instructionsSchema,
      ctx: TransactionContext,
      BlockTime: number,
      log: CompletedExecution
) =>{


    const proposalAddress = address(
        TransactionAccountskey.at(instruction.accounts[1]!)!
      );
    
    const decodedEvent = eventDecoder.decode(log.events[0]?.raw!);
      
    const parsedEvent = FinalizeProposalSchema.parse(decodedEvent?.data);

    await prisma.proposals.update({
        where:{
            proposal_key:proposalAddress
        },
        data:{
            status:parsedEvent.proposal_status
        }
    })

    




}