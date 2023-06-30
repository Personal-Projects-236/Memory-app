import express from "express";

import getCard from "../controllers/cardControllers/getCard.mjs";
import deleteCard from "../controllers/cardControllers/deleteCard.mjs";

const router = express.Router();

router
	.get("/", async (req, res) => {
		await getCard(req, res);
	})
	.delete("/", async (req, res) => {
		await deleteCard(req, res);
	});

export default router;
