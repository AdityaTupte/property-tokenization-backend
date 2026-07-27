import { Router } from "express";
import { heliusRaWDataHandler } from "../helius/heliusWebhookInstructionHandler";



 const router = Router();



router.route("/senddata").post(heliusRaWDataHandler);


export default router;