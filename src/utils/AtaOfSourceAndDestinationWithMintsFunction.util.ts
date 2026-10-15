import type { instructionsSchema } from "../helius/findProgramIndex";

import bs58 from "bs58";
import { prisma } from "../prismaclient";

export function decodeExecuteData(data: string) {
  const decoded = Buffer.from(bs58.decode(data));

  if (decoded.length < 16) {
    throw new Error("Invalid Execute instruction data");
  }

  return  decoded.readBigUInt64LE(8)
  
}


export const AtaOfSourceAndDestinationWithMintsFunction = (

    instructions:instructionsSchema[],
    AccountsKeys: string[],
) =>{


    const InstructionRequiredData =  instructions.map(

        (ele) =>{

           const sourceAta  = AccountsKeys[ele.accounts.at(0)!]

           const mintAddress  = AccountsKeys[ele.accounts.at(1)!]

           const destintationAta  = AccountsKeys[ele.accounts.at(3)!]
            
           const amount:bigint = decodeExecuteData(ele.data)

            return {
                sourceAta,
                mintAddress,
                destintationAta,
                amount
            }
        }


    )

    return InstructionRequiredData

}







export const  getTokenAccountOwnersFromDb = async(
  accounts: { ataKey: string; mintKey: string }[]
) => {
  const records = await prisma.ata.findMany({
    where: {
      AND: accounts.map(({ ataKey, mintKey }) => ({
        ataKey,
        mintKey,
      })),
    },
    select: {
      ataKey: true,
      mintKey: true,
      owner: true,
    },
  });

  const accountMap = new Map(
    records.map((record) => [
      `${record.ataKey}:${record.mintKey}`,
      record.owner,
    ])
  );

  return accounts.map(({ ataKey, mintKey }) => ({
    ataKey,
    mintKey,
    owner: accountMap.get(`${ataKey}:${mintKey}`) ?? null,
  }));
}