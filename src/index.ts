import { DatabaseConnection } from "./db/databaseconnection";
import { heliusConnection } from "./helius/heliusConnection"; 
import { createwebhook } from "./helius/heliusCreateWebhook";

DatabaseConnection;

heliusConnection();

createwebhook();

