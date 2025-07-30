import type { GeneratePayload } from "../dto/generate.dto.js";

export function getPackageJson(payload: GeneratePayload) {
  return {
    name: payload.description
      ? payload.description.toLowerCase().replace(/\s+/g, "-")
      : "my-nodelizr-project",
    version: payload.version || "1.0.0",
    description: payload.description || "A Nodelizr project",
    author: payload.author || "",
    main: "src/index.js",
    scripts: {
      start: "node src/index.js",
    },
    dependencies: payload.libraries?.length
      ? Object.fromEntries(
          payload.libraries.map((lib) => [lib.name, lib.version || "*"])
        )
      : {},
    license: payload.license || "MIT",
  };
}
