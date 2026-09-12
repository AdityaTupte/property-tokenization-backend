import { snapshotRequestedJobCreationHandler } from "../controllers/solanaProgram.controller.ts/solanaEventJobProducer.controller.ts/snapshotRequestedJobCreation.controller"
import { eventDecoder } from "../idl.schema/SolanaProgramHelper/anchorIdlHelper"
import type { Eventahandler } from "../types&interface/solanaInstrcution&event.type"
import type { CompletedExecution } from "../types&interface/solanaLogParser.interface"


const eventHandlerRegistry : Record<string,Eventahandler> = {

    SnapshotRequested : snapshotRequestedJobCreationHandler



}


export const EventHandler = async (
    log : CompletedExecution
) =>{

    if(!log.events[0]) return

    const RawEvent = log.events[0]?.raw


    const decodedData = eventDecoder.decode(RawEvent!)

    const handler = eventHandlerRegistry[decodedData?.name!] 

    if(!handler) return 

    await handler(log)


}