// import { publickey, signature } from "@solana/web3.js"
// import { prisma } from "../../../prismaclient"

import type { instructionsSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/prisamTransactionClass";

// type BalanceHistoryRow = {
//             holder: string;
//             balance: bigint;
//             slot: bigint;
// };

export const UpdateHistoryOfHolder = async(
    TransactionAccountKeys:String[],
    instruction : instructionsSchema,
    slot :number,
    ctx: TransactionContext
) => {

    // require new balances -- mint -- slot -- sigature -- Blocktime


    const SourceAtaAddress = instruction.accounts[0]

    const MintAddress = instruction.accounts[1]
    
    const DestinationAtaAddress = instruction.accounts[2]

    const authority = instruction.accounts[3]


   /*  
        chjeclk db for correspoding owner 
        
          { 1 db call with find many }

        if not present call helius fuction for find owner  

        getMUltipleAcccounts data 

        register new onwer in db corresponding to ata


        get balances of source and destinations 
        
        operations on the owner and the destination if destination not found balance is zero   

        and update the Balnce history and TokenTransfer tables



    */

    // query balance from the sender and receiver from balancehistory

    // minus sender balance by the sender new balance which will be given by the event
    
    // minus  reciveer new balance which will be given by the event by the reciver balance 

    //  if equal proceed

    //  create a row in  the transfer token table where transfer amount is minus amount and
    
    //  the new balcanbe will be the solana given balance

    //  create two rows in the balance history for sender and receiver 


//    const balances = await prisma.$queryRaw<
//         BalanceHistoryRow[]
//         >`
//         SELECT DISTINCT ON ("holder")
//             "holder",
//             "balance",
//             "slot"
//         FROM "BalanceHistory"
//         WHERE "mint" = ${mint}
//             AND "holder" IN (${sender}, ${receiver})
//             AND "slot" <= ${slot}
//         ORDER BY "holder", "slot" DESC
//         `;
    
//     const fromBalance =  balances.find(x => x.holder === sender)?.balance ?? 0n;

//     const toBalance =  balances.find(x => x.holder === receiver)?.balance ?? 0n;

    
//     const tranferAmount1 = fromBalance - newBalanceOfSender;

//     const tranferAmount2 = newBalanceOfReceiver - toBalance;

//     if(tranferAmount1 != tranferAmount2){

//         // throw new Error 
//     }
   
//     await prisma.tokenTransfer.create({

//         data:{
//                 mint:mint,
//                 amountTransfer:tranferAmount1,
//                 newBalanceOfSender:newBalanceOfSender,
//                 newBalanceOfReceiver:newBalanceOfReceiver,
//                 sender:sender,
//                 receiver:receiver,
//                 signature:signature,
//                 slot:slot,
//                 time: new Date(BlockTime * 1000)
//           }
        

//     })

//     await prisma.balanceHistory.createMany({
//         data: [
//             {
//                 holder: sender,
//                 balance:newBalanceOfSender ,
//                 mint: tokenMint,
//                 slot: currentSlot,
//             },
//             {
//                 holder: receiver,
//                 balance: newBalanceOfReceiver,
//                 mint: tokenMint,
//                 slot: currentSlot,
//             },
//         ],
//     });
};