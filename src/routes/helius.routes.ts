import { Router } from "express";
import { heliusRawDataAccept } from "../helius/heliusWebhookInstructionHandler";



 const router = Router();



router.route("/senddata").post(heliusRawDataAccept);


export default router;