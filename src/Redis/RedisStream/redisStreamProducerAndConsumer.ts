import { RedisConnectionForStream } from "../RedisConnection";
import { RedisStreamConsumerClass, RedisStreamProducerClass } from "./RedisStreamClasses";

export const RedisStreamProducer = new RedisStreamProducerClass(
    RedisConnectionForStream,
    "vote-stream",
    "DBConsumerGroup" 
)

export const RedisStreamConsumer1 = new RedisStreamConsumerClass(
    RedisConnectionForStream,
    "vote-stream",
    "DBConsumerGroup",
    "DBConsumer-1"
    );

export const RedisStreamConsumer2 = new RedisStreamConsumerClass(
    RedisConnectionForStream,
    "vote-stream",
    "DBConsumerGroup",
    "DBConsumer-2"
    );

export const RedisStreamConsumer3 = new RedisStreamConsumerClass(
    RedisConnectionForStream,
    "vote-stream",
    "DBConsumerGroup",
    "DBConsumer-3"
    );






