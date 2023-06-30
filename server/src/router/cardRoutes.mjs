import express from "express";
import cardControllers from "../controllers/cardControllers.mjs";

import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router
	.get("/", async (req, res) => {
		await cardControllers(req, res);
	})
	.delete("/", async (req, res) => {
		const { query } = req;
		const { id } = query;

		await prisma.user
			.delete({
				where: {
					id: parseInt(id),
				},
			})
			.then(() => {
				res
					.status(200)
					.json({ msg: "Your Card has been successfully deleted" });
			})
			.catch((err) => console.log("err", err));
	});

export default router;
