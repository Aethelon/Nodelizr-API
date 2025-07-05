import express from "express";
import cors from "cors";
import generateController from "../api/controller/generate.controller.js";
import librariesController from "../api/controller/libraries.controller.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", generateController);

app.use("/api", librariesController);


export default app;
