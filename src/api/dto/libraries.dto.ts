import { Library } from "./generate.dto.js";

export interface GroupedLibraries {
  [category: string]: Library[];
}

export interface NpmPackageDetails {
  name: string;
  version: string;
  description?: string;
}