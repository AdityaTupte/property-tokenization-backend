import Redis from "ioredis";
import { VotingForPropsal } from "../../controllers/solanaProgram.controller.ts/ProposalVoting.controller";

export type Vote = {
  proposal_key: string;
  signer: string;
  voting_power: number;
  For_Against: boolean;
};

export class RedisStreamConsumerClass {
  constructor(
    private redis: Redis<"legacy">,
    private stream: string,
    private group: string,
    private consumer: string
  ) {}

  async consume() {
    while (true) {
      const result = await this.redis.xreadgroup(
        "GROUP",
        this.group,
        this.consumer,
        "COUNT",
        10000,
        "BLOCK",
        5000,
        "STREAMS",
        this.stream,
        ">"
      );

      if (!result) continue;

      const streamEntries = result[0]?.[1];
      if (!streamEntries) continue;

      const votes: Vote[] = streamEntries.map(([, fields]) => {
        const data: Record<string, string> = {};

        for (let i = 0; i < (fields?.length ?? 0); i += 2) {
          data[String(fields![i])] = String(fields![i + 1]);
        }

        return {
          proposal_key: data.proposalKey ?? "",
          signer: data.voter ?? data.voterAddress ?? "",
          voting_power: Number(data.votingPower ?? 0),
          For_Against: data.vote === "true" || data.vote === "FOR",
        };
      });

      await VotingForPropsal(votes);

      const ids = streamEntries.map(([id]) => id);

      await this.redis.xack(this.stream, this.group, ...ids);
      await this.redis.xdel(this.stream, ...ids);

    }
  }
}

export class RedisStreamProducerClass {
  private readonly redis: Redis<"legacy">;
  private stream: string;

  constructor(redis: Redis<"legacy">, stream: string, group: string) {
    this.redis = redis;
    this.stream = stream;
  }

  async produce(
    proposalKey: string,
    voterAddress: string,
    votingPower: number,
    vote: boolean
  ): Promise<void> {
    await this.redis.xadd(
      this.stream,
      "*",
      "proposalKey",
      proposalKey,
      "voter",
      voterAddress,
      "votingPower",
      votingPower.toString(),
      "vote",
      vote.toString()
    );
  }
}
