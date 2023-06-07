import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
	let { body } = req;

	await prisma.user
		.create({ data: body })
		.then(() => {
			res.status(200).json({ msg: "Success" });
		})
		.catch((err) => console.log("err", err));
});

export default router;
