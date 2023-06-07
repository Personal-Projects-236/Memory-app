import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({ msg: "You have hit the home route" });
});

export default router;
