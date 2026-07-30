    import {  Program,  } from "@coral-xyz/anchor";
    import { Connection, Keypair } from "@solana/web3.js";
    import * as anchor from "@coral-xyz/anchor";
    import idl from "./property_tokenization.json";
    import { BorshInstructionCoder } from "@coral-xyz/anchor";
    import type { PropertyTokenization } from "./property_tokenization";

    const connection = new Connection(
  "https://api.devnet.solana.com",
  "confirmed"
);

    const provider = new anchor.AnchorProvider(
  connection,
  new anchor.Wallet(Keypair.generate()),
  {}
);

anchor.setProvider(provider);
   

    export const program =  new Program<PropertyTokenization>(idl as PropertyTokenization,provider);
    export const decoder = new BorshInstructionCoder(idl as any);
