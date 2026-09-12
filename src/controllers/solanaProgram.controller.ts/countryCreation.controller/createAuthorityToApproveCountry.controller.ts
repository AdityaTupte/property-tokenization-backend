import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { create_approve_country_authoritySchema } from "../../../idl.schema/generated/create_approve_country_authority.schema";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
export const handlerCreateAuthorityToApproveCountry: InstructionHandler =
  async (
    message: messageSchema,
    instruction: instructionsSchema,
    ctx: TransactionContext,
    _BlockTime: number,
    log: CompletedExecution
  ) => {
    const AuthorityToApproveCountryAddress = address(
      message.accountKeys[instruction.accounts[1]!]!
    );

    const bytes = Buffer.from(bs58.decode(instruction.data));

    const decodedData = decoder.decode(bytes);

    const argument = create_approve_country_authoritySchema.parse(decodedData);

    const authoritiesStringArray = argument.authority.map((ele: any) =>
      ele.toString()
    );

    ctx.add(async (tx) => {
      await tx.countryApprovalAuthority.upsert({
        where: {
          id: 1,
        },

        create: {
          id: 1,
          authority: authoritiesStringArray,
          threshold: argument.threshold,
        },

        update: {
          authority: authoritiesStringArray,
        },
      });
    });
  };
