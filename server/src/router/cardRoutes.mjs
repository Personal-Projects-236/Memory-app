import express from "express";

import cardControllers from "../controllers/cardControllers.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
	await cardControllers(res);
});

export default router;
