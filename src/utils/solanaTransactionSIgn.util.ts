import { GetPublicKeyCommand, KMSClient, SignCommand } from "@aws-sdk/client-kms"

import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
  TransactionInstruction
} from "@solana/web3.js";

import crypto from "crypto";
import { NotFoundError } from "./errors/AppErrors/NotFoundError";
import { InfrastructureError } from "./errors/InfraBaseErrorClass";
export const solanaSignatureHandler = async(

    tx: TransactionInstruction

) =>{

    
   const kms = new KMSClient({
     region: process.env.REGION,
   });

   const connection = new Connection(
  process.env.RPC_URL!,
  "confirmed"
);

    const publicKeyResult = await kms.send(
      new GetPublicKeyCommand({
        KeyId: process.env.
        KMS_KEY_ID,
      })
    );
    
    if (!publicKeyResult.PublicKey) {
      throw new InfrastructureError("kms public key is not retured",{});
    }
    
    const kmsPublicKeyDer = Buffer.from(
      publicKeyResult.PublicKey
    );
    
    // Ed25519 raw public key = last 32 bytes
    const rawPublicKey =
      kmsPublicKeyDer.subarray(
        kmsPublicKeyDer.length - 32
      );
    
    const authority = new PublicKey(rawPublicKey);
    
    console.log("\nKMS authority:");
    console.log(authority.toBase58());
    
    let balance =  await connection.getBalance(authority);

      if(balance / LAMPORTS_PER_SOL < 50){

        //TODO  message to the owner

      }

    const { blockhash,lastValidBlockHeight} = await connection.getLatestBlockhash("confirmed");

    const transaction = new Transaction();

    transaction.add(tx);
    
    transaction.feePayer = authority;
    
    transaction.recentBlockhash =
      blockhash;

      const message = transaction.serializeMessage()

    //  const signResult = await kms.send(
    //   new SignCommand({
    //     KeyId: process.env.
    //     KMS_KEY_ID,
    
    //     Message: message,
         
    //     MessageType: "RAW",
    
    //     SigningAlgorithm:
    //       "ED25519_SHA_512",
    //   })
    // );
    
    // if (!signResult.Signature) {
    //   throw new Error(
    //     "KMS did not return signature"
    //   );
    // }
    
    const signature =
      Buffer.from(signResult.Signature);
    
    
    const valid =
      crypto.verify(
        null,
        message,
        {
          key: kmsPublicKeyDer,
          format: "der",
          type: "spki",
        },
        signature
      );
    
    console.log(
      "KMS signature valid:",
      valid
    );
    
    if (!valid) {
      throw new Error(
        "KMS signature verification FAILED"
      );
    }

    
transaction.addSignature(
  authority,
  signature
);

const transactionValid =
  transaction.verifySignatures();

console.log(
  "Solana transaction signature valid:",
  transactionValid
);

if (!transactionValid) {
  throw new Error(
    "Solana transaction signature verification FAILED"
  );
}

const rawTransaction =
  transaction.serialize();


  const txSignature =
  await connection.sendRawTransaction(
    rawTransaction,
    {
      skipPreflight: false,
      preflightCommitment: "confirmed",
    }
  );

  await connection.confirmTransaction(
  {
    signature: txSignature,
    blockhash,
    lastValidBlockHeight,
  },
  "confirmed"
);
  


}