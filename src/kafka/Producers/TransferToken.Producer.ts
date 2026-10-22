import type { InstructionDataInterface, TokenTransferInstructionInterface } from "../../types&interface/instructionData.Interface";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { producer } from "./producer";

// export const TokenTransferProducer = async (
    
//     data:TokenTransferInstructionInterface
// ) => {

//     await producer.send({
//         topic: KAFKA_TOPICS.TOKENTRANSFER,
//         messages: [
//             {
//                 value: JSON.stringify(data),
//             },
//         ],
        
//     });

//     console.log("messsage produced");
// };