import express from "express";
import { getLongUrl, shortenUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post("/create-url", shortenUrl);
router.get("/:shortCode", getLongUrl);

export default router;
