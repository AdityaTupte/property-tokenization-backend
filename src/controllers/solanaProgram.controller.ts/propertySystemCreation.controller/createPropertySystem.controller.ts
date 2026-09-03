import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import { address } from "@solana/kit";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { create_property_systemSchema } from "../../../idl.schema/generated/create_property_system.schema";

export const handleCreatePropertySystem:InstructionHandler = async (
  message: messageSchema,
  instruction: instructionsSchema,
  ctx:TransactionContext,
  BlockTime:number
) => {

  const bytes = Buffer.from(bs58.decode(instruction.data));

  const decodedData = decoder.decode(bytes)

  const argument = create_property_systemSchema.parse(decodedData?.data)

  const propertySystemAddress = address(
    message.accountKeys.at(instruction.accounts[1]!)!
  );
  

  const creator_pubky = address(
    message.accountKeys.at(instruction.accounts[0]!)!
  );

  const governance_mint = address(
    message.accountKeys.at(instruction.accounts[9]!)!
  );



  const treasuryAddress = address(
    message.accountKeys.at(instruction.accounts[3]!)!
  );



  const thresholdAddress = address(
    message.accountKeys.at(instruction.accounts[2]!)!
  );

  const dividendAddress = address(
    message.accountKeys.at(instruction.accounts[6]!)!
  );

  

  const safetyAddress = address(
    message.accountKeys.at(instruction.accounts[5]!)!
  );

  
  const reinvestmentAddress = address(
    message.accountKeys.at(instruction.accounts[4]!)!
  );


  
  const trusteeRegistryAddress = address(
    message.accountKeys.at(instruction.accounts[7]!)!
  );

 


  const AribtrarRegistryAddress = address(
    message.accountKeys.at(instruction.accounts[8]!)!
  );



  
  

  ctx.add(async (tx) => {
    await tx.propertySystemAccount.create({
      data: {
        creator_pubky: creator_pubky.toString(),
        property_system_id: argument.system_id,
        property_system_public_key: propertySystemAddress,
        arbitrator_registry:AribtrarRegistryAddress.toString(),
        treasury: treasuryAddress.toString(),
        governance_mint: governance_mint.toString(),
        trustee_registry: trusteeRegistryAddress.toString(),
        ready_for_listing: false,
        total_properties: 0,
        created_at: new Date(BlockTime * 1000), 
        dividend: dividendAddress,
        reinvestment: reinvestmentAddress,
        safety: safetyAddress,
        threshold: thresholdAddress,
      },
    });

    await tx.dividendPda.create({
      data: {
        dividend_pubkey: dividendAddress,
        dividend_per_token: 0,
        last_updated_ts: null,
      },
    });

    await tx.threshold.create({
      data: {
        threshold_pub_key: thresholdAddress,
        dividend_threshold: argument.dividend_threshold,
        reinvestment_threshold: argument.reinvestment_threshold,
        safety_threshold: argument.safety_threshold,
        trustee_salary_threshold: argument.trustee_salary_threshold,
        arbitrator_salary_threshold: argument.arbitrator_salary_threshold,
      },
    });

    await tx.fund.createMany({
      data: [
        {
          fundtype: "reinvestment",
          fundKey: reinvestmentAddress.toString(),
          property_system_pubkey: propertySystemAddress,
          used: 0,
        },
        {
          fundtype: "safety",
          fundKey: safetyAddress.toString(),
          property_system_pubkey: propertySystemAddress,
          used: 0,
        },
      ],
    });

    await tx.treasury.create({
      data: {
        treasury_key: treasuryAddress.toString(),
        last_distribution: null,
      },
    });

    await tx.trusteeRegistry.create({
      data:{
        trustee_registry_pubkey :trusteeRegistryAddress.toString(),
        current_number_of_trustees:0,
        total_trustees:argument.total_trustees,
        total_salary_allocated:0,
        vote_threshold:argument.trustee_vote_threshold,
        claim_deadline_ts: null,
      }
    })


    await tx.arbitrarRegistry.create({
      data:{
       arbitrar_registry_pubkey:AribtrarRegistryAddress.toString(),
       current_number_of_arbitrar:0,
       total_arbitrar:argument.total_arbitrar,
       total_salary_allocated:0,
       vote_threshold:argument.arbitrar_vote_threshold,
       claim_deadline_ts: null
      }
    })


  });



};
