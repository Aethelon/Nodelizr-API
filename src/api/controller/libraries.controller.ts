import { Router, Request, Response } from "express";
import { getLibrariesWithVersions } from "../service/libraries.service.js";

const router = Router();

router.get("/libraries", async (req: Request, res: Response) => {
  try {
    const libs = await getLibrariesWithVersions();
    res.json(libs);
  } catch (err) {
    console.error("Erro ao listar bibliotecas:", err);
    res.status(500).json({ message: "Erro ao listar bibliotecas" });
  }
});

export default router;
