import { Router } from "express";
import { heliusRaWDataHandler } from "../helius/heliusWebhookInstructionHandler";
import { tokenTransferDataHandler } from "../helius/tokenTransferDataHandler";



 const router = Router();



router.route("/senddata").post(heliusRaWDataHandler);
router.route("/senddata1").post(tokenTransferDataHandler);


export default router;