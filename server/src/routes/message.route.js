import { Router } from "express";
import sendMessage from "../controllers/sendMessage.controller.js";
import retrieveMessage from "../controllers/retrieveMessage.controller.js";

const router = Router();

router.post("/send-message", sendMessage);
router.get("/retrieve-message", retrieveMessage);

export default router;
