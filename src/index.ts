import { DatabaseConnection } from "./db/databaseconnection";
import { ConnectToKMSFunction } from "./db/KmsConnection";
// import { SolanaServiceForSignnature } from "./db/solanaConnection";
import { heliusConnection } from "./helius/heliusConnection"; 
import { createwebhook } from "./helius/heliusCreateWebhook";
// import { StartKafkaServer } from "./kafka/kafka.StarterFile";



try {


    // console.log(
    //     "Solana service:",
    //     SolanaServiceForSignnature
    // );

    await Promise.all([
        DatabaseConnection,
        heliusConnection(),
        createwebhook(),
        // StartKafkaServer(),
        // ConnectToKMSFunction(),
    ]);


} catch (error) {

    console.error("❌ Startup failed:", error);

    process.exit(1);
}

