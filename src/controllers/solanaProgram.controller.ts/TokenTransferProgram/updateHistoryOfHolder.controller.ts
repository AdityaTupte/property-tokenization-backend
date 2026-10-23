import { tokenTransfereventDecoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import type { TokenTransferDbEventSchema } from "../../../types&interface/instructionData.Interface";

import { z } from "zod";
import { ApiError } from "../../../utils/errors/ApiError";

export const TokenTransferEventSchema = z.object({
  name: z.literal("TokenTransferEvent"),
  data: z.object({
    source: z.string(),
    destination: z.string(),
    postBalanceOfSource: z.string(),
    postBalaceOfDestination: z.string(),
  }),
});

export const UpdateHistoryOfHolder = async (
  data: TokenTransferDbEventSchema
) => {
  // require new balances -- mint -- slot -- sigature -- Blocktime

  const SourceOwner = data.sourceOwner;

  const SourceAtaAddress = data.sourceAta;

  const MintAddress = data.mint;

  const recieverAtaAddress = data.recieverAta;

  const recieverOwner = data.recieverOwner;

  if (!data.programEventData) {
    throw new ApiError(400, "sdarf");
  }

  const event = tokenTransfereventDecoder.decode(data.programEventData);

  if (event) {
    const convertedEvent = {
      name: event.name,
      data: {
        source: event.data.source.toBase58(),
        destination: event.data.destination.toBase58(),
        postBalanceOfSource: event.data.postBalanceOfSource.toString(),
        postBalaceOfDestination: event.data.postBalaceOfDestination.toString(),
      },
    };

    const result = TokenTransferEventSchema.safeParse(convertedEvent);

    if (result.success) {
     

        // DB call


    } else {
      console.error("Invalid event:", result.error.format());
    }

  } else {
    console.error("Failed to decode event");
  }

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
