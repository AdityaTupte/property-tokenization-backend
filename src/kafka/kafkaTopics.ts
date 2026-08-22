import { KAFKA_TOPICS } from "./kafka.TopicsNames";
import {kafka} from "./kakfaClient"

export const kafkaInit = async function () {


    const admin = kafka.admin();

    await admin.connect();

    await admin.createTopics({
        topics: [
            {
                topic: KAFKA_TOPICS.INSTRUCTION,
                numPartitions: 3,
                replicationFactor: 1,
            },
        ],
    });

    await admin.disconnect();
    
};






