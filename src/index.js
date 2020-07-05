import { config } from "dotenv";
import express from "express";
import cors from "cors";

config();

import "./database";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.PORT);
console.log(`App is listening on port ${process.env.PORT}!`);