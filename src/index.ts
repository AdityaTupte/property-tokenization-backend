import { DatabaseConnection } from "./db/databaseconnection";
import { heliusConnection } from "./helius/heliusConnection"; 
import { createwebhook } from "./helius/heliusCreateWebhook";
import { StartKafkaServer } from "./kafka/kafka.StarterFile";



try {

    DatabaseConnection;

    await Promise.all([
        DatabaseConnection,
        heliusConnection(),
        createwebhook(),
        StartKafkaServer(),
    ]);


} catch (error) {

    console.error("❌ Startup failed:", error);

    process.exit(1);
}

