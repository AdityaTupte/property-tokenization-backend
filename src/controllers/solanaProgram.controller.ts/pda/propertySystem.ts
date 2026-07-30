import * as anchor from "@coral-xyz/anchor";
import { program } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { type Address} from "@solana/kit";
import { ApiError } from "../../../utils/ApiError.js";


// const [governanceMint] = anchor.web3.PublicKey.findProgramAddressSync(
//   [
//    Buffer.from("mint"),
//   propertySystemPda.toBuffer(),
//   ],
//   program.programId
// );

// const [extraAccountMetaList] = anchor.web3.PublicKey.findProgramAddressSync(
//     [Buffer.from("extra-account-metas"), governanceMint.toBuffer()],
//     program2.programId
//   );
// \

export const propertySystemPda = async (public_key:Address) => {
 try {
   
  //  const account =  await program.account.propertySystemAccount.fetch(public_key);
   console.log("AAALU");
   
   console.log(program.provider.connection.rpcEndpoint);
   

  //  return account;  
 
 } catch (error) {

  throw new ApiError(404, "Property system account not found");

 }

};
