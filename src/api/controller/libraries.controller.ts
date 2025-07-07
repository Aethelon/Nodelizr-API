import { Router, Request, Response } from "express";
import apicache from "apicache";
import { getLibrariesWithVersions, searchNpmPackage } from "../service/libraries.service.js";
import { GroupedLibraries } from "../dto/libraries.dto.js";

const router = Router();
const cache = apicache.middleware;
router.get("/libraries", cache("25 minutes"), async (req: Request, res: Response) => {
  try {
    const libs: GroupedLibraries = await getLibrariesWithVersions();
    res.json(libs);
  } catch (err) {
    console.error("Error listing libraries:", err);
    res.status(500).json({ message: "Error listing libraries" });
  }
});

router.get("/libraries/search", async (req: Request, res: Response) => {
  const { name } = req.query;

  const result = await searchNpmPackage(name as string);

  res.status(result.status).json(result.data);
});

export default router;
