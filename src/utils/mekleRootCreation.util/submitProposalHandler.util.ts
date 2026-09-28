import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueue.consumer"

import * as submitFunction  from "../../controllers/solanaProgram.controller.ts/SubmitProposalDataToSolana/submitProposalFunction.lib"


const ProposalTypeSubmitFuctionHandler: Record<
    number,
    (data: Pick<SnapshotRequestedType, "proposal_key" | "proposalTypeIndex">) => Promise<void>
> = {

    0 : submitFunction.SubmitSellProposalSolanaFuctionHandler              

}