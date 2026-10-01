import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";

import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/errors/ApiError";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
import { eventDecoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { SnapshotRequestedSchema } from "../../../idl.schema/generated/SnapshotRequested.schema";
import { snapshotRequestedJobCreationHandler } from "../../../Redis/RedisJobQueue/producer/snapshotRequestedQueue.producer";
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

    let ArbitrarApproved: boolean = false;
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

    if (ArbitrarApproved) {
      await snapshotRequestedJobCreationHandler(log);
    }
  };
