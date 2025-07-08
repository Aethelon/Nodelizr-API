import {
  fetchLatestVersion,
  fetchPackageInfoByName,
} from "../../shared/utils/npm.js";
import { LIBRARIES } from "../data/libraries.list.js";
import { Library } from "../dto/generate.dto.js";
import { NpmPackageDetails } from "../dto/libraries.dto.js";

export async function getLibrariesWithVersions(): Promise<Library[]> {
  const librariesWithVersions: Library[] = await Promise.all(
    LIBRARIES.map(async (lib) => {
      const version = await fetchLatestVersion(lib.name);
      return {
        ...lib,
        version: version ?? "unknown",
      };
    })
  );

  return librariesWithVersions;
}

export async function searchNpmPackage(
  name: string
): Promise<{ status: number; data: NpmPackageDetails | { message: string } }> {
  if (!name || typeof name !== "string" || name.trim() === "") {
    return {
      status: 400,
      data: {
        message:
          "The 'name' parameter is required and must be a non-empty string for the search.",
      },
    };
  }

  const packageName = name.trim();

  try {
    const packageInfo: NpmPackageDetails | null = await fetchPackageInfoByName(
      packageName
    );

    if (packageInfo) {
      return {
        status: 200,
        data: packageInfo,
      };
    } else {
      return {
        status: 404,
        data: {
          message: `Library '${packageName}' not found on npm or does not have valid information.`,
        },
      };
    }
  } catch (err) {
    console.error(`Unexpected error fetching library '${packageName}':`, err);
    return {
      status: 500,
      data: {
        message: "An internal error occurred while fetching the library.",
      },
    };
  }
}
