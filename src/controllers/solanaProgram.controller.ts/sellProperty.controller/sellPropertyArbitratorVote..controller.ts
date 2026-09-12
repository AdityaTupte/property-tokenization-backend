import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";

import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
import {
  decoder,
  eventDecoder,
} from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { PropertySystemCreatedSchema } from "../../../idl.schema/generated/PropertySystemCreated.schema";
import { SnapshotRequestedSchema } from "../../../idl.schema/generated/SnapshotRequested.schema";
export const handleSellPropertyProposalArbitratorVote: InstructionHandler =
  async (
    message: messageSchema,
    instruction: instructionsSchema,
    ctx: TransactionContext,
    _BlockTime: number,
    log: CompletedExecution
  ) => {
    const proposalAddress = address(
      message.accountKeys[instruction.accounts[2]!]!
    );

    const arbitrarRegistryAddress = address(
      message.accountKeys[instruction.accounts[4]!]!
    );

    // const ProposalAccountPda = (await GenericPda(
    //   "propertySellProposal",
    //   proposalAddress
    // )) as any;

    // const ProposalAccount: PdaTypes.propertySellProposalType = {
    //   ...ProposalAccountPda,
    //   status: ProposalAccountPda.status as unknown as PdaTypes.StatusVariant,
    //   proposalType:
    //     ProposalAccountPda.proposalType as unknown as PdaTypes.ProposalVariant,
    // };

    const signer = address(
      message.accountKeys[instruction.accounts[0]!]!.toString()
    );

    const ProposalDb = await prisma.proposals.findUnique({
      where: {
        proposal_key: proposalAddress.toString(),
      },
      select: {
        arbitrar_approvals: true,
      },
    });

    const arbitrarDb = await prisma.arbitrarRegistry.findFirst({
      where: {
        arbitrar_registry_pubkey: arbitrarRegistryAddress.toString(),
      },
      select: {
        vote_threshold: true,
      },
    });

    if (!arbitrarDb) throw new ApiError(409, "arbitrarRgistry not available");

    let ArbitrarApproved: boolean;
    if (
      arbitrarDb.vote_threshold ==
      (ProposalDb?.arbitrar_approvals?.length ?? 0) + 1
    ) {
      ArbitrarApproved = true;
    }

    const decodedEvent = eventDecoder.decode(log.events[0]?.raw!);

    const parsedEvent = SnapshotRequestedSchema.parse(decodedEvent?.data);

    ctx.add(async (tx) => {
      tx.proposals.update({
        where: {
          proposal_key: proposalAddress.toString(),
        },
        data: {
          arbitrar_approvals: {
            push: [`${signer}`],
          },
          is_arbitrar_approved: ArbitrarApproved ? true : undefined,
          status: ArbitrarApproved ? "Approved" : undefined,
          slot: ArbitrarApproved ? parsedEvent.slot : undefined,
        },
      });
    });

    //TODO create merkleRoot function and update
    // TODO vote threshold update here and Total Voting Power
    //TODO Autocall the submit fuction
  };
