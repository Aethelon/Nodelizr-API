import apicache from "apicache";
import { Request, Response, Router } from "express";
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

export default router;
