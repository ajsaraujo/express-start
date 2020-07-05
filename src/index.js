import { config } from "dotenv";
import express from "express";

config();

import "./database";
import routes from "./routes";

const app = express();

app.use(routes);
app.listen(process.env.PORT);

console.log(`App is listening on port ${process.env.PORT}!`);