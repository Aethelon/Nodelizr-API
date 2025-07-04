import { createZip } from "../../shared/utils/zip.js";
import { getPackageJson } from "../../api/data/generate.template.js";
import { GeneratePayload } from "../../api/dto/generate.dto.js";

export async function generateProject(payload: GeneratePayload) {
  const entries = [
    {
      name: "package.json",
      content: JSON.stringify(getPackageJson(payload), null, 2)
    },
    {
      name: "src/index.js",
      content: "// Hello from your generated project!"
    },
    {
      name: "README.md",
      content: `# ${payload.description}\n\nGenerated via NodeLizr`
    }
  ];

  return createZip(entries);
}
