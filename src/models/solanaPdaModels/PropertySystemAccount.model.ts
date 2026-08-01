import type { propertySystemAccountType } from "../../types&interface/PdaTypes/programPdaTypes";
import { prisma } from "../../prismaclient.js";
import type { PropertySystemAccount } from "../../generated/prisma/client";

export const PropertySystemAccountPdaDb = prisma.$extends({
  model: {
    propertySystemAccount: {
      async createPropertySystem(
        args: propertySystemAccountType,
        propertySystemkey: string,
        dividendAddress: string,
        reinvestmentAddress: string,
        safetyAddress: string,
        thresholdAddress: string
      ) {
        prisma.propertySystemAccount.create({
          data: {
            creator_pubky: args.creator.toString(),
            property_system_id: args.propertySystemId.toNumber(),
            property_system_public_key: propertySystemkey,
            arbitrator_registry: args.arbitratorRegistry.toString(),
            treasury: args.treasury.toString(),
            governance_mint: args.governanceMint.toString(),
            trustee_registry: args.trusteeRegistry.toString(),
            ready_for_listing: args.readyForListing,
            bump: args.bump,
            total_properties: 0,
            created_at: new Date(args.createdAt.toNumber() * 1000),
            dividend: dividendAddress,
            reinvestment: reinvestmentAddress,
            safety: safetyAddress,
            threshold: thresholdAddress,
          },
        });
      },
    },
  },
});
