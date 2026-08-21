import {kafka} from "./kakfaClient"

async function init() {
    const admin = kafka.admin();
  
    console.log("conntecting");
  
    await admin.connect()
   
    console.log("connteced");
    
     await admin.createTopics({
    topics: [
      {
        topic: "Instruction",
        numPartitions: 3,
        replicationFactor: 1,
      },
    ],
  });
 
    await admin.disconnect();
}

export const producer = kafka.producer()

export const InstructionConsumer = kafka.consumer({
  groupId:"InstructionConsumer",
})

InstructionConsumer.connect()

init()