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
      content: "// Hello from your Nodelizr project!"
    },
    {
      name: "README.md",
      content: `# Generated via NodeLizr`
    },
    {
      name: ".gitignore",
      content: `node_modules\n.env\ndist\npackage-lock.json`
    }
  ];

  return createZip(entries);
}
