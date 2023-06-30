import express from "express";
import { PrismaClient } from "@prisma/client";

import getCard from "../controllers/cardControllers/getCard.mjs";
import deleteCard from "../controllers/cardControllers/deleteCard.mjs";

const router = express.Router();
const prisma = new PrismaClient();

router
	.get("/", async (req, res) => {
		await getCard(req, res);
	})
	.put("/", async (req, res) => {
		const { body, query } = req;
		const { id } = query;

		await prisma.user
			.update({
				where: { id: parseInt(id) },
				data: body,
			})
			.then(() => console.log("Data successfully updated"))
			.catch((err) => console.log(err));
	})
	.delete("/", async (req, res) => {
		await deleteCard(req, res);
	});

export default router;
