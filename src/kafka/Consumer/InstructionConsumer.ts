import { solanaInstructionHandler } from "../../helius/instructionHandlerForSolanaProgram";
import type { InstructionDataInterface } from "../../types&interface/instructionData.Interface";
import { TransactionContext } from "../../utils/solanaDbHandler";
import { InstructionConsumer } from "../kafkaserver";

InstructionConsumer.subscribe({
  topic: "Instruction",
});

InstructionConsumer.run({
  autoCommit: true,
  eachMessage: async ({ topic, heartbeat, message, partition, pause }) => {
    
    if (!message.value) {
        console.log("Message has no value");
        return;
    }

    const data: InstructionDataInterface = JSON.parse(
         message.value.toString()
    );

    // const InstructionName:string[] = data.

    // const InstructionData  = data.EachInstructionData

    const ctx = new TransactionContext()
    
    for (const element of data.InstructionNameAndData) {

      const handler = solanaInstructionHandler(element.name)
        
      handler(data.transaction,element.data,ctx,data.blockTime)

    }
    
    ctx.execute()

  },
});
