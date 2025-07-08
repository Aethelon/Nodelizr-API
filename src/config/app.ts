import cors from "cors";
import express from "express";
import generateController from "../api/controller/generate.controller.js";
import librariesController from "../api/controller/libraries.controller.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", generateController);
app.use("/api", librariesController);

app.use((req, res) => {
  res.status(404).json({
    message: `Route '${req.method} ${req.originalUrl}' not found`,
    routes: [
      { method: "POST", path: "/api/generate" },
      { method: "GET", path: "/api/libraries" },
      { method: "GET", path: "/api/libraries/search?name={package}" },
    ],
  });
});

export default app;
