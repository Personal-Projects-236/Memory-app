import cors from "cors";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { keys } from "./src/lib/keys.mjs";
import formRoutes from "./src/router/formRoutes.mjs";
import homeRoutes from "./src/router/homeRoutes.mjs";

const prisma = new PrismaClient();
const app = express();

const { PORT } = keys;

app
	// middleware
	.use(cors())
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	// routers
	.use("/", homeRoutes)
	.use("/forms", formRoutes)
	// listening
	.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
