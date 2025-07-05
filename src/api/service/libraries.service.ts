import { LIBRARIES } from "../data/libraries.list.js";
import { fetchLatestVersion } from "../../shared/utils/npm.js";

export async function getLibrariesWithVersions() {
  return await Promise.all(
    LIBRARIES.map(async (lib) => {
      const version = await fetchLatestVersion(lib.name);
      return {
        ...lib,
        version: version ?? "unknown"
      };
    })
  );
}
