import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router
	.post("/", async (req, res) => {
		let { body } = req;

		await prisma.user
			.create({ data: body })
			.then(() => {
				res
					.status(200)
					.json({ msg: "Your data was successfully saved to Database" });
			})
			.catch((err) => {
				res.status(500).json({ msg: err.message });
			});
	})
	.get("/", async (req, res) => {
		await prisma.user
			.findMany({})
			.then((r) => {
				console.log("r", r);
			})
			.catch((err) => console.log("err", err));
	});

export default router;
