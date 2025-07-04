import { Request, Response, Router } from "express";
import { generateProject } from "../../api/service/generate.service.js";
import { GeneratePayload } from "../../api/dto/generate.dto.js";

const router = Router();

router.post("/generate", async (req: Request, res: Response) => {
  try {
    const payload: GeneratePayload = req.body;

    const zipStream = await generateProject(payload);

    res.set({
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=project.zip"
    });

    zipStream.pipe(res);
  } catch (error) {
    console.error("Erro ao gerar projeto:", error);
    res.status(500).json({ message: "Erro ao gerar o projeto" });
  }
});

export default router;
