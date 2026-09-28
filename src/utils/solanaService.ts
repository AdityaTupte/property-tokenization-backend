

import { Connection, LAMPORTS_PER_SOL, PublicKey, Transaction, TransactionInstruction} from "@solana/web3.js"

export interface SolanaTransactionDetail {
    transaction : Transaction
    message : Buffer,
    blockhash: string,
    lastValidBlockHeight :number,
}

export class SolanaService  {

    private readonly connection : Connection

    constructor(connection:Connection){

        this.connection = connection

    }


    async addInstructionToTransaction(authority:PublicKey,tx:TransactionInstruction): Promise<SolanaTransactionDetail> {

    let balance =  await this.connection.getBalance(authority);

    if(balance / LAMPORTS_PER_SOL < 50){
        console.log("message to owner");
        
        //TODO  message to the owner

    }

     const { blockhash,lastValidBlockHeight} = await this.connection.getLatestBlockhash("confirmed");

    const transaction = new Transaction();

    transaction.add(tx);
    
    transaction.feePayer = authority;
    
    transaction.recentBlockhash = blockhash;

    const message = transaction.serializeMessage()

    return {transaction,message,blockhash,lastValidBlockHeight};

    }

    
    async addSignatureAndExecuteTransaction(
        transaction: Transaction,
        authority: PublicKey,
        signature: Buffer,
        option: Pick<SolanaTransactionDetail,"transaction"| "blockhash" | "lastValidBlockHeight">
    ): Promise<string> {

        transaction.addSignature(
            authority,
            signature
        );

        const transactionValid = transaction.verifySignatures();

        if (!transactionValid) {
            throw new Error(
                "Solana transaction signature verification FAILED"
            );
        }

        const rawTransaction = transaction.serialize();

        const txSignature =
            await this.connection.sendRawTransaction(
                rawTransaction,
                {
                    skipPreflight: false,
                    preflightCommitment: "confirmed",
                }
            );

        await this.connection.confirmTransaction(
            {
                signature: txSignature,
                blockhash: option.blockhash,
                lastValidBlockHeight: option.lastValidBlockHeight,
            },
            "confirmed"
        );

        return txSignature;
    }

}