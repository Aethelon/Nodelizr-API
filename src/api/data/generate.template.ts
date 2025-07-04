import type { GeneratePayload } from "../dto/generate.dto.js";

export function getPackageJson(payload: GeneratePayload) {
  
  return {
    name: payload.description.toLowerCase().replace(/\s+/g, "-"),
    version: payload.version,
    description: payload.description,
    author: payload.author,
    main: "src/index.js",
    scripts: {
      start: "node src/index.js",
    },
    dependencies: Object.fromEntries(
      payload.libraries.map((lib) => [lib.name, lib.version || "*"])
    ),
  };
}
