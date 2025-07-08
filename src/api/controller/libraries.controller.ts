import apicache from "apicache";
import { Request, Response, Router } from "express";
import { Library } from "../dto/generate.dto.js";
import {
  getLibrariesWithVersions,
  searchNpmPackage,
} from "../service/libraries.service.js";

const router = Router();
const cache = apicache.middleware;
router.get(
  "/libraries",
  cache("25 minutes"),
  async (req: Request, res: Response) => {
    try {
      const libs: Library[] = await getLibrariesWithVersions();
      res.json(libs);
    } catch (err) {
      console.error("Error listing libraries:", err);
      res.status(500).json({ message: "Error listing libraries" });
    }
  }
);

router.get("/libraries/search", async (req: Request, res: Response) => {
  const { name } = req.query;

  const result = await searchNpmPackage(name as string);

  res.status(result.status).json(result.data);
});

export default router;
