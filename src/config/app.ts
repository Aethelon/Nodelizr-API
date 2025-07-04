import express from "express";
import cors from "cors";
import generateController from "../api/controller/generate.controller.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", generateController);

export default app;
