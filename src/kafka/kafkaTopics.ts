import { KAFKA_TOPICS } from "./kafka.TopicsNames";
import {kafka} from "./kakfaClient"

export const kafkaInit = async function () {


    const admin = kafka.admin();

    await admin.connect();

    await admin.createTopics({
        topics: [
            {
                topic: KAFKA_TOPICS.INSTRUCTION,
                numPartitions: 1,
                
                replicationFactor: 1,
            },
        ],
    });

    await admin.createTopics({
        topics: [
            {
                topic: KAFKA_TOPICS.TOKENTRANSFER,
                replicationFactor: 1,
            },
        ],
    });

    await admin.disconnect();
    
};






