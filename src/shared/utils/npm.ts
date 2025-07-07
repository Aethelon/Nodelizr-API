import fetch from "node-fetch";
import { NpmPackageDetails } from "../../api/dto/libraries.dto.js";

export async function fetchLatestVersion(packageName: string): Promise<string | null> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
    if (!res.ok) return null;

    const data: any = await res.json();
    return typeof data.version === "string" ? data.version : null;
  } catch (err) {
    console.error(`Erro ao buscar ${packageName}:`, err);
    return null;
  }
}

export async function fetchPackageInfoByName(packageName: string): Promise<NpmPackageDetails | null> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${packageName}/latest`);

    if (!res.ok) {
      return null;
    }

    const data: any = await res.json();

    if (typeof data.name === "string" && typeof data.version === "string") {
      return {
        name: data.name,
        version: data.version,
        description: typeof data.description === "string" ? data.description : undefined,
      };
    }
    return null;
  } catch (err) {
    console.error(`Error fetching detailed information for '${packageName}':`, err);
    return null;
  }
}
