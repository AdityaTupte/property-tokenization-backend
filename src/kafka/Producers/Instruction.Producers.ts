import type { ProducerBatch } from "kafkajs";
import type {
  InstructionDataInterface,
  InstructionNameAndData,
} from "../../types&interface/instructionData.Interface";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { instTxProducer, producer } from "./producer";

const InstructionToPartion:Record<string,number> = {
    "create_property_system":1,
    "add_trustee":1,
    add_arbitrator:1,
    create_approve_country_authority:2,
    create_country_proposal:2,
    approve_country:2,
    execute_country_propsal:2,
    add_country_authority:2,
    state_creation_proposal:2,
    state_proposal_approval:2,
    state_proposal_execute:2,
    add_state_auhtority:2,
    create_property_proposal:3,
    approve_property_proposal:3,
    execute_property_proposal:3,
    create_sell_proposal:1,
    sell_proposal_arbitrar_vote:1,
    submit_snapshot_for_sell_proposal:1,
    voting_for_sell_proposal:1, //FIXME multiple for voting for hiogh thoruhput,
    sell_proposal_finalize:1,
    delete_sell:1,


}

export const instructionProducer = async (data: InstructionDataInterface) => {
  const tx = await instTxProducer.transaction();

  try {
    const instructions: InstructionNameAndData[] = data.InstructionNameAndData;
  
    const topicMessages: NonNullable<ProducerBatch["topicMessages"]> = [];
  
    const kafkaBatchEvent: ProducerBatch = { topicMessages };
  
    const ix = instructions.map((inst) => {
      topicMessages.push({
        topic: inst.name,
        messages: [
          {
            partition: 1,
            value: JSON.stringify(inst.data),
          },
        ],
      });
    });
  
    await tx.sendBatch(kafkaBatchEvent);
  
    await tx.commit()
  
  } catch (error) {
    await tx.abort()
  }

  console.log("messsage produced");
};
