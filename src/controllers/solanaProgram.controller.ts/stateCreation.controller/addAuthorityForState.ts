import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/prisamTransactionClass";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/errors/ApiError";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";

export const handleAddAuthorityForState: InstructionHandler = async (
  TransactionAccountskey: string[],
  instruction: instructionsSchema,
  ctx: TransactionContext,
  _BlockTime: number,
  log: CompletedExecution
) => {
  const StatePdaAddress = address(
    TransactionAccountskey.at(instruction.accounts[4]!)!
  );

  const StateAuthority = address(
    TransactionAccountskey.at(instruction.accounts[2]!)!
  ).toString();

  const StatePdaDb = prisma.statePda.findUnique({
    where: {
      state_public_key: StatePdaAddress.toString(),
    },
  });

  if (!StatePdaDb)
    throw new ApiError(
      404,
      "Countey Pda for adding the authority not avaliable in db"
    );

  ctx.add(async (tx) => {
    tx.stateAuthorityReceipt.upsert({
      where: {
        public_key: StatePdaAddress.toString(),
      },
      create: {
        public_key: StatePdaAddress.toString(),
        signer: [`${StateAuthority}`],
      },
      update: {
        signer: {
          push: `${StateAuthority}`,
        },
      },
    });
  });
};
