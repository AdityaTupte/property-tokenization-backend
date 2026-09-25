import {
  KMSClient,
  GetPublicKeyCommand,
  SignCommand,
} from "@aws-sdk/client-kms";

import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL
} from "@solana/web3.js";

import crypto from "crypto";

const REGION = "eu-north-1";

const KMS_KEY_ID =
  "mrk-849058ae7aed4854aae07240978d0888";

const RPC_URL =
  "https://api.devnet.solana.com";

const kms = new KMSClient({
  region: REGION,
});

const connection = new Connection(
  RPC_URL,
  "confirmed"
);

// --------------------------------------------------
// 1. Get public key from KMS
// --------------------------------------------------

const publicKeyResult = await kms.send(
  new GetPublicKeyCommand({
    KeyId: KMS_KEY_ID,
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

// --------------------------------------------------
// 2. Check Devnet balance
// --------------------------------------------------

let balance =
  await connection.getBalance(authority);

console.log(
  "Balance:",
  balance / LAMPORTS_PER_SOL,
  "SOL"
);

// --------------------------------------------------
// 3. Airdrop Devnet SOL if necessary
// --------------------------------------------------

if (balance < 0.01 * LAMPORTS_PER_SOL) {

  console.log("\nRequesting Devnet SOL...");

  const airdrop =
    await connection.requestAirdrop(
      authority,
      1 * LAMPORTS_PER_SOL
    );

  console.log(
    "Airdrop signature:",
    airdrop
  );

  await connection.confirmTransaction(
    airdrop,
    "confirmed"
  );

  balance =
    await connection.getBalance(authority);

  console.log(
    "New balance:",
    balance / LAMPORTS_PER_SOL,
    "SOL"
  );
}

// --------------------------------------------------
// 4. Get recent blockhash
// --------------------------------------------------

const {
  blockhash,
  lastValidBlockHeight,
} =
  await connection.getLatestBlockhash(
    "confirmed"
  );

// --------------------------------------------------
// 5. Build transaction
// --------------------------------------------------

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

console.log("\nTransaction created");

// --------------------------------------------------
// 6. Serialize EXACT Solana message
// --------------------------------------------------

const message =
  transaction.serializeMessage();

console.log(
  "Message size:",
  message.length,
  "bytes"
);

// --------------------------------------------------
// 7. Ask AWS KMS to sign the message
// --------------------------------------------------

console.log("\nCalling AWS KMS...");

const signResult = await kms.send(
  new SignCommand({
    KeyId: KMS_KEY_ID,

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

console.log(
  "Signature size:",
  signature.length,
  "bytes"
);

// --------------------------------------------------
// 8. Verify KMS signature locally
// --------------------------------------------------

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

// --------------------------------------------------
// 9. Attach signature to transaction
// --------------------------------------------------

transaction.addSignature(
  authority,
  signature
);

// --------------------------------------------------
// 10. Verify transaction signatures
// --------------------------------------------------

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

// --------------------------------------------------
// 11. Serialize final signed transaction
// --------------------------------------------------

const rawTransaction =
  transaction.serialize();

console.log(
  "Signed transaction size:",
  rawTransaction.length,
  "bytes"
);

// --------------------------------------------------
// 12. Send to Devnet
// --------------------------------------------------

console.log(
  "\nSending transaction to Devnet..."
);

const txSignature =
  await connection.sendRawTransaction(
    rawTransaction,
    {
      skipPreflight: false,
      preflightCommitment: "confirmed",
    }
  );

console.log(
  "\nTransaction:",
  txSignature
);

// --------------------------------------------------
// 13. Confirm
// --------------------------------------------------

await connection.confirmTransaction(
  {
    signature: txSignature,
    blockhash,
    lastValidBlockHeight,
  },
  "confirmed"
);

console.log("\n================================");
console.log("SUCCESS");
console.log("================================");

console.log(
  "Authority:",
  authority.toBase58()
);

console.log(
  "Transaction:",
  txSignature
);

console.log(
  `https://explorer.solana.com/tx/${txSignature}?cluster=devnet`
);