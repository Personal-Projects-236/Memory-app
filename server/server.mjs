import express from "express";

import { keys } from "./src/lib/keys.mjs";

const app = express();

const { PORT } = keys;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
