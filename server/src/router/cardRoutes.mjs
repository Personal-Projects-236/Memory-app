import express from "express";

import getCard from "../controllers/cardControllers/getCard.mjs";
import deleteCard from "../controllers/cardControllers/deleteCard.mjs";
import updateCard from "../controllers/cardControllers/updateCard.mjs";

const router = express.Router();

router
	.get("/", async (req, res) => {
		await getCard(req, res);
	})
	.put("/", async (req, res) => {
		await updateCard(req, res);
	})
	.delete("/", async (req, res) => {
		await deleteCard(req, res);
	});

export default router;
