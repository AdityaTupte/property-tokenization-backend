
import {
  TransactionInstruction,  
} from "@solana/web3.js";

import * as submitFunction  from "../../controllers/solanaProgram.controller.ts/SubmitProposalDataToSolana/submitProposalFunction.lib"
import { ApiError } from "../errors/ApiError";



 const SubmitFuctionHandlerMap: Record<
    number,
     ( proposalKey :string )=> Promise<TransactionInstruction>
> = {

    0 : submitFunction.SubmitSellProposalSolanaFuctionHandler              

}


export const ProposalTypeSubmitFuctionHandler = async(
    index:number,
) : Promise< ( proposalKey :string )=> Promise<TransactionInstruction>> =>{

    const handler =  SubmitFuctionHandlerMap[index];
    
    if (!handler) throw new ApiError(500, "No instructionHandler Available");

    return handler;




}