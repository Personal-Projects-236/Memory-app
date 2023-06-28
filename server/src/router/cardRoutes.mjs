import express from "express";
import cardControllers from "../controllers/cardControllers.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
	await cardControllers(req, res);
});

export default router;
