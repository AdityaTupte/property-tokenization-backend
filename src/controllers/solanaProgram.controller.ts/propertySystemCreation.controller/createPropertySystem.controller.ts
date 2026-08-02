import type {
  Instructions,
  messageSchema,
} from "../../../helius/findProgramIndex";
import { address } from "@solana/kit";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import { GenericPda } from "../../../utils/genericPda";
import { prisma } from "../../../prismaclient";

export const handleCreatePropertySystem = async (
  message: messageSchema,
  instruction: Instructions
) => {
  const propertySystemAddress = address(
    message.accountKeys.at(instruction.accounts[1]!)!
  );

  const propertySystemAccount: PdaTypes.propertySystemAccountType =
    (await GenericPda(
      "propertySystemAccount",
      propertySystemAddress
    )) as PdaTypes.propertySystemAccountType;

  const treasuryAddress = address(
    message.accountKeys.at(instruction.accounts[3]!)!
  );

  const treasuryAccount: PdaTypes.treasuryType = (await GenericPda(
    "treasuryPda",
    treasuryAddress
  )) as PdaTypes.treasuryType;

  const thresholdAddress = address(
    message.accountKeys.at(instruction.accounts[2]!)!
  );

  const thresholdAccount: PdaTypes.thresholdType = (await GenericPda(
    "threshold",
    thresholdAddress
  )) as PdaTypes.thresholdType;

  const dividendAddress = address(
    message.accountKeys.at(instruction.accounts[6]!)!
  );

  const dividendAccount: PdaTypes.dividendType = (await GenericPda(
    "dividendPda",
    dividendAddress
  )) as PdaTypes.dividendType;

  const safetyAddress = address(
    message.accountKeys.at(instruction.accounts[5]!)!
  );

  const safetyAccount: PdaTypes.safetyType = (await GenericPda(
    "safetyPda",
    safetyAddress
  )) as PdaTypes.safetyType;

  const reinvestmentAddress = address(
    message.accountKeys.at(instruction.accounts[4]!)!
  );

  const reinvestmentAccount: PdaTypes.ReinvestmentType = (await GenericPda(
    "reinvestmentPda",
    reinvestmentAddress
  )) as PdaTypes.ReinvestmentType;

  
  const trusteeRegistryAddress = address(
    message.accountKeys.at(instruction.accounts[7]!)!
  );

  const trusteeRegistryaccount:PdaTypes.trusteeRegistry  = await GenericPda(
    "trusteeRegistry",
    trusteeRegistryAddress
  ) as PdaTypes.trusteeRegistry


  const AribtrarRegistryAddress = address(
    message.accountKeys.at(instruction.accounts[8]!)!
  );

  const AribtratorRegistryaccount:PdaTypes.arbitratorRegistry  = await GenericPda(
    "arbitratorRegistry",
    AribtrarRegistryAddress
  ) as PdaTypes.arbitratorRegistry

  const transaction = await prisma.$transaction(async (tx) => {
    await tx.propertySystemAccount.create({
      data: {
        creator_pubky: propertySystemAccount.creator.toString(),
        property_system_id: propertySystemAccount.propertySystemId.toNumber(),
        property_system_public_key: propertySystemAddress,
        arbitrator_registry:
          propertySystemAccount.arbitratorRegistry.toString(),
        treasury: propertySystemAccount.treasury.toString(),
        governance_mint: propertySystemAccount.governanceMint.toString(),
        trustee_registry: propertySystemAccount.trusteeRegistry.toString(),
        ready_for_listing: propertySystemAccount.readyForListing,
        bump: propertySystemAccount.bump,
        total_properties: 0,
        created_at: new Date(propertySystemAccount.createdAt.toNumber() * 1000),
        dividend: dividendAddress,
        reinvestment: reinvestmentAddress,
        safety: safetyAddress,
        threshold: thresholdAddress,
      },
    });

    await tx.dividendPda.create({
      data: {
        dividend_pubkey: dividendAddress,
        dividend_per_token: BigInt(dividendAccount.dividendPerToken.toString()),
        last_updated_ts:
          dividendAccount.lastUpdatedTs.toNumber() !== 0
            ? new Date(dividendAccount.lastUpdatedTs.toNumber() * 1000)
            : null,
        bump: dividendAccount.bump,
      },
    });

    await tx.threshold.create({
      data: {
        threshold_pub_key: thresholdAddress,
        dividend_threshold: thresholdAccount.dividendThreshold,
        reinvestment_threshold: thresholdAccount.reinvestmentThreshold,
        safety_threshold: thresholdAccount.safetyThreshold,
        trustee_salary_threshold: thresholdAccount.trusteeSalaryThreshold,
        arbitrator_salary_threshold: thresholdAccount.arbitratorSalaryThreshold,
      },
    });

    await tx.fund.createMany({
      data: [
        {
          fundtype: "reinvestment",
          fundKey: reinvestmentAddress.toString(),
          property_system_pubkey: propertySystemAddress,
          used: BigInt(reinvestmentAccount.reinvestementUsed.toString()),
        },
        {
          fundtype: "safety",
          fundKey: safetyAddress.toString(),
          property_system_pubkey: propertySystemAddress,
          used: BigInt(safetyAccount.safetyFundUsed.toString()),
        },
      ],
    });

    await tx.treasury.create({
      data: {
        treasury_key: treasuryAddress.toString(),
        bump: treasuryAccount.bump,
        last_distribution:
          treasuryAccount.lastDistributionTs.toNumber() !== 0
            ? new Date(treasuryAccount.lastDistributionTs.toNumber() * 1000)
            : null,
      },
    });

    await tx.trusteeRegistry.create({
      data:{
        trustee_registry_pubkey :propertySystemAccount.trusteeRegistry.toString(),
        current_number_of_trustees:trusteeRegistryaccount.currentNumberOfTrustees,
        total_trustees:trusteeRegistryaccount.totalTrustees,
        total_salary_allocated:BigInt(trusteeRegistryaccount.totalSalaryAllocated.toString()),
        vote_threshold:trusteeRegistryaccount.voteThreshold,
        bump:trusteeRegistryaccount.bump,
        claim_deadline_ts:trusteeRegistryaccount.claimDeadlineTs.toNumber() !== 0
            ? new Date(trusteeRegistryaccount.claimDeadlineTs.toNumber() * 1000)
            : null,
      }
    })


    await tx.arbitrarRegistry.create({
      data:{
       arbitrar_registry_pubkey:propertySystemAccount.arbitratorRegistry.toString(),
       current_number_of_arbitrar:AribtratorRegistryaccount.currentNumberOfArbitrators,
       total_arbitrar:AribtratorRegistryaccount.totalArbitrators,
       total_salary_allocated:BigInt(AribtratorRegistryaccount.totalSalaryAllocated.toString()),
       vote_threshold:AribtratorRegistryaccount.voteThreshold,
       bump:AribtratorRegistryaccount.bump,
       claim_deadline_ts:AribtratorRegistryaccount.claimDeadlineTs.toNumber() !== 0 
       ? new Date(AribtratorRegistryaccount.claimDeadlineTs.toNumber())
       : null
      }
    })


  });
};
