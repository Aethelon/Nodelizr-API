import apicache from "apicache";
import { Request, Response, Router } from "express";
import { getTemplatePreview, isTemplateSupported } from "../service/generate.service.js";
import { getGenerationOptions } from "../service/options.service.js";

const router = Router();
const cache = apicache.middleware;

router.get("/options", cache("30 minutes"), (_req: Request, res: Response) => {
  try {
    const options = getGenerationOptions();
    res.json(options);
  } catch (error) {
    console.error("Error fetching generation options:", error);
    res.status(500).json({ message: "Error fetching generation options" });
  }
});

router.get(
  "/templates/:templateId/preview",
  cache("30 minutes"),
  async (req: Request, res: Response) => {
    const { templateId } = req.params;
    if (!isTemplateSupported(templateId)) {
      res.status(400).json({
        message: `Template '${templateId}' is not supported.`,
      });
      return;
    }

    try {
      const preview = await getTemplatePreview(templateId);
      res.json(preview);
    } catch (error) {
      console.error("Error fetching template preview:", error);
      res.status(500).json({ message: "Error fetching template preview" });
    }
  }
);

export default router;
