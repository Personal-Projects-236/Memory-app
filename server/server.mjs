import express from "express";
import { PrismaClient } from "@prisma/client";
import { keys } from "./src/lib/keys.mjs";

const prisma = new PrismaClient();
const app = express();

const { PORT } = keys;

app.get("/", (req, res) => {
	res.send("Hello");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
