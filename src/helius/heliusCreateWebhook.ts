import { helius } from "./heliusConnection";


  export const createwebhook = async () => {

  

  //   const webhooks = await helius.webhooks.getAll();

  // // const existing = webhooks.find(
  // //   (w) =>
  // //     w.webhookURL === " https://hub-surf-peninsula-implement.trycloudflare.com/api/v1/webhook/sendData" &&
  // //     w.webhookType === "rawDevnet"
  // // );

  // // if (existing) {
  // //   console.log("Webhook already exists:", existing.webhookID);
  // //   return existing;
  // // }

    
  //   const webhook = await helius.webhooks.create({
  //     webhookURL: "https://hub-surf-peninsula-implement.trycloudflare.com/api/v1/webhook/sendData",
  //     accountAddresses:["BYtpqEouT7FFDUFjFeE2ecSDwf1VHNNHUKc2URsWVZ4B"],
  //     webhookType:"rawDevnet",
  //     transactionTypes:["ANY"],
  //     authHeader: "Bearer my-secret-token",
  //     txnStatus:"success"
  //   });
  //   console.log("Created webhook:", webhook);


  // //   const existing2 = webhooks.find(
  // //   (w) =>
  // //     w.webhookURL === "https://hub-surf-peninsula-implement.trycloudflare.com/api/v1/webhook/sendData" &&
  // //     w.webhookType === "rawDevnet"
  // // );

  // // if (existing2) {
  // //   console.log("Webhook already exists:", existing2.webhookID);
  // //   return existing;
  // // }

    
  //   const webhook2 = await helius.webhooks.create({
  //     webhookURL: "https://hub-surf-peninsula-implement.trycloudflare.com/api/v1/webhook/sendData",
  //     accountAddresses:["AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv"],
  //     webhookType:"rawDevnet",
  //     transactionTypes:["ANY"],
  //     authHeader: "Bearer my-secret-token",
  //     txnStatus:"success"
  //   });
  //   console.log("Created webhook:", webhook);


  
};