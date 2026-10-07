// import { publickey, signature } from "@solana/web3.js"
// import { prisma } from "../../../prismaclient"

// type BalanceHistoryRow = {
//             holder: string;
//             balance: bigint;
//             slot: bigint;
// };

// export const UpdateHistoryOfHolder = async(
//     sender: string,
//     receiver: publickey,
//     BlockTime: number,
//     _meta: any,
//     mint?: string,
//     slot?: bigint
// ) => {

//     // require new balances -- mint -- slot -- sigature -- Blocktime


//     // query balance from the sender and receiver from balancehistory

//     // minus sender balance by the sender new balance which will be given by the event
    
//     // minus  reciveer new balance which will be given by the event by the reciver balance 

//     //  if equal proceed

//     //  create a row in  the transfer token table where transfer amount is minus amount and
    
//     //  the new balcanbe will be the solana given balance

//     //  create two rows in the balance history for sender and receiver 


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
// };