import { Request, Response, Router } from "express";
import {
  generateProject,
  isTemplateSupported,
} from "../../api/service/generate.service.js";
import { GeneratePayload } from "../../api/dto/generate.dto.js";

const router = Router();

router.post("/generate", async (req: Request, res: Response) => {
  try {
    const body = req.body as Partial<GeneratePayload> & { templateId?: string };
    if (body.templateId && !isTemplateSupported(body.templateId)) {
      res.status(400).json({
        message: `Template '${body.templateId}' is not supported.`,
      });
      return;
    }

    const payload: GeneratePayload = {
      author: body.author || "",
      description: body.description || "",
      version: body.version || "1.0.0",
      license: body.license || "MIT",
      libraries: Array.isArray(body.libraries) ? body.libraries : [],
      templateId: body.templateId as GeneratePayload["templateId"],
      presetId: body.presetId,
    };

    const zipStream = await generateProject(payload);

    res.set({
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=project.zip"
    });

    zipStream.pipe(res);
  } catch (error) {
    console.error("Error generating project:", error);
    res.status(500).json({ message: "Error generating project" });
  }
});

export default router;
