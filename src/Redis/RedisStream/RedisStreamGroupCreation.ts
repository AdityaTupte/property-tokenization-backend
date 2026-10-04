  export function RedisStreamGroupCreation(redis: any) {
  return {
    async createGroup(): Promise<void> {
      try {
        await redis.xgroup(
          "CREATE",
          "vote-stream",
          "DBConsumerGroup",
          "$",
          "MKSTREAM"
        );
      } catch (error: any) {
        if (!error?.message?.includes("BUSYGROUP")) {
          throw error;
        }
      }
    },
  };
}