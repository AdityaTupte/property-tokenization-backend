import { helius } from "./heliusConnection";


  export const createwebhook = async () => {

  try {

    const webhooks = await helius.webhooks.getAll();

  const existing = webhooks.find(
    (w) =>
      w.webhookURL === "https://corners-hispanic-identity-charger.trycloudflare.com/api/v1/webhook/sendData" &&
      w.webhookType === "rawDevnet"
  );

  if (existing) {
    console.log("Webhook already exists:", existing.webhookID);
    return existing;
  }

    
    const webhook = await helius.webhooks.create({
      webhookURL: "https://corners-hispanic-identity-charger.trycloudflare.com/api/v1/webhook/sendData",
      accountAddresses:["BYtpqEouT7FFDUFjFeE2ecSDwf1VHNNHUKc2URsWVZ4B"],
      webhookType:"rawDevnet",
      transactionTypes:["ANY"],
      authHeader: "Bearer my-secret-token",
      txnStatus:"success"
    });
    console.log("Created webhook:", webhook);
  } catch (error) {
    console.error("Error:", error);
    
  }
};