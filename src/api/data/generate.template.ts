import type { GeneratePayload } from "../dto/generate.dto.js";

interface PackageJsonOptions {
  main?: string;
  scripts?: Record<string, string>;
  type?: "commonjs" | "module";
  requiredDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  extraFields?: Record<string, unknown>;
}

export function toPackageName(description?: string): string {
  if (!description) {
    return "my-nodelizr-project";
  }

  const normalized = description
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "my-nodelizr-project";
}

function normalizeVersion(version?: string): string {
  if (!version || version === "unknown") {
    return "*";
  }

  return version;
}

export function getPackageJson(
  payload: GeneratePayload,
  options: PackageJsonOptions = {}
) {
  const selectedDependencies = payload.libraries?.length
    ? Object.fromEntries(
        payload.libraries.map((lib) => [lib.name, normalizeVersion(lib.version)])
      )
    : {};

  const dependencies = {
    ...(options.requiredDependencies ?? {}),
    ...selectedDependencies,
  };

  const packageJson: Record<string, unknown> = {
    name: toPackageName(payload.description),
    version: payload.version || "1.0.0",
    description: payload.description || "A Nodelizr project",
    author: payload.author || "",
    main: options.main || "src/index.js",
    scripts: options.scripts || { start: "node src/index.js" },
    dependencies,
    license: payload.license || "MIT",
  };

  if (options.type) {
    packageJson.type = options.type;
  }

  if (options.devDependencies && Object.keys(options.devDependencies).length) {
    packageJson.devDependencies = options.devDependencies;
  }

  if (options.extraFields && Object.keys(options.extraFields).length) {
    Object.assign(packageJson, options.extraFields);
  }

  return packageJson;
}
