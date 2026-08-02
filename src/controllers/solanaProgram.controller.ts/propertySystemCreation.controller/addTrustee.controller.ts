import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";


export const handleAddTrustee = async(
    message:messageSchema,
    instruction:Instructions
) => {


    const propertySystemAddress = address(message.accountKeys[instruction.accounts[1]!]!);

    const authority =  address(message.accountKeys[instruction.accounts[0]!]!);

    const trustee_registry =  address(message.accountKeys[instruction.accounts[2]!]!);

    const newTrustee =  address(message.accountKeys[instruction.accounts[3]!]!);


    // check that the trusteeRegistry is created or not 
    // if not throw error 
    // add to the trustee table 

    






}