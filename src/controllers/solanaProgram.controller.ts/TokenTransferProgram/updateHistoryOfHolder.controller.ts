import { tokenTransfereventDecoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import type { TokenTransferDbEventSchema } from "../../../types&interface/instructionData.Interface";

import { z } from "zod";
import { ApiError } from "../../../utils/errors/ApiError";
import { prisma } from "../../../prismaclient";

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

    if (
      result.data?.data.source != data.sourceAta ||
      result.data?.data.destination != data.recieverAta
    ) {
      throw new ApiError(445, "fdsaf");
    }

    if (result.success) {
      await prisma.$transaction(async (tx) => {
        await tx.tokenTransfer.create({
          data: {
            mint: data.mint?.toString()!,
            sender: data.sourceOwner!,
            receiver: data.recieverOwner!,
            newBalanceOfSender: BigInt(result.data.data.postBalanceOfSource),
            newBalanceOfReceiver: BigInt(
              result.data.data.postBalaceOfDestination
            ),
            amountTransfer: data.amount,
            slot: data.slot,
            signature: data.signature,
            time: new Date(data.blocktime),
          },
        });

        await tx.balanceHistory.createMany({
          data: [
            {
              holder: data.sourceOwner!,
              balance: BigInt(result.data.data.postBalanceOfSource),
              mint: data.mint?.toString()!,
              slot: data.slot,
            },
            {
              holder: data.recieverOwner!,
              balance: BigInt(result.data.data.postBalaceOfDestination),
              mint: data.mint?.toString()!,
              slot: data.slot,
            },
          ],
        });
      });
    } else {
      console.error("Invalid event:", result.error.format());
    }
  } else {
    console.error("Failed to decode event");
  }
};
