import { GetPublicKeyCommand, KMSClient, SignCommand } from "@aws-sdk/client-kms";
import { prisma } from "../../prismaclient";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueue.consumer";
import crypto from "crypto";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL
} from "@solana/web3.js";
import { program } from "../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
export const submitMerkleRootToOnchainPda = async (
    event:SnapshotRequestedType
) => {
    
   

    const proposal = await prisma.proposals.findFirst({
    where:{
        proposal_key:event.proposal_key.toString()
    },
    select:{
        deleted:true
    }
    })
    
    if(!proposal){

        // TODO throw new TODO

    }

    // TODO if(proposal?.deleted == true) throw new A

    
    const merkleRoot = await prisma.merkleRoot.findFirst({
        where:{
            slot:event.slot.toString(),
            mint:event.mint
        }
    })

    // TODO ERRor when mekle root no t wfound

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
      throw new Error("KMS public key not returned");
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

        // message to the owner

      }

    const { blockhash,lastValidBlockHeight} = await connection.getLatestBlockhash("confirmed");

    const transaction = new Transaction();
    
    transaction.feePayer = authority;
    
    transaction.recentBlockhash =
      blockhash;
    
    // Self-transfer of 0 SOL.
    // It still creates a real transaction and
    // requires the fee payer signature.
    
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: authority,
        toPubkey: authority,
        lamports: 0,
      })
    );
    
    const tx =  program.methods.submitSnapshotForSellProposal(
        
    )

    transaction.add(tx);


    const message = transaction.serializeMessage();


    const signResult = await kms.send(
      new SignCommand({
        KeyId: process.env.
        KMS_KEY_ID,
    
        // EXACT serialized Solana message
        Message: message,
    
        // Required for ED25519_SHA_512
        MessageType: "RAW",
    
        SigningAlgorithm:
          "ED25519_SHA_512",
      })
    );
    
    if (!signResult.Signature) {
      throw new Error(
        "KMS did not return signature"
      );
    }
    
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