import {
  getPackageJson,
  toPackageName,
} from "../../api/data/generate.template.js";
import { DEFAULT_TEMPLATE_ID, PROJECT_TEMPLATES } from "../../api/data/project-options.data.js";
import { GeneratePayload } from "../../api/dto/generate.dto.js";
import {
  TEMPLATE_IDS,
  TemplateId,
  TemplatePreviewResponse,
} from "../../api/dto/options.dto.js";
import { fetchLatestVersion } from "../../shared/utils/npm.js";
import { createZip } from "../../shared/utils/zip.js";

interface ZipEntry {
  name: string;
  content: string;
}

interface TemplateRuntimeConfig {
  main: string;
  scripts: Record<string, string>;
  type?: "commonjs" | "module";
  requiredDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  extraFields?: (packageName: string) => Record<string, unknown>;
  files: (payload: GeneratePayload) => ZipEntry[];
}

interface VersionCacheEntry {
  version: string;
  expiresAt: number;
}

function getLicenseText(license: string, author: string) {
  const year = new Date().getFullYear();
  switch (license) {
    case "MIT":
      return `MIT License

Copyright (c) ${year} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
    case "Apache-2.0":
      return `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

Copyright (c) ${year} ${author}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;
    case "GPL-3.0":
      return `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (c) ${year} ${author}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;
    default:
      return `All rights reserved.`;
  }
}

const tsTooling = {
  typescript: "^5.4.0",
  "ts-node": "^10.9.2",
  "@types/node": "^20.5.9",
};

const VERSION_CACHE_TTL_MS = 15 * 60 * 1000;
const latestVersionCache = new Map<string, VersionCacheEntry>();

const templateConfigs: Record<TemplateId, TemplateRuntimeConfig> = {
  [TEMPLATE_IDS.NODE_BASIC_JS]: {
    main: "src/index.js",
    scripts: {
      dev: "node --watch src/index.js",
      start: "node src/index.js",
    },
    files: () => [
      {
        name: "src/index.js",
        content: `require("dotenv").config();

console.log("Welcome to your Nodelizr project!");
console.log("Environment:", process.env.NODE_ENV || "development");
`,
      },
    ],
  },
  [TEMPLATE_IDS.EXPRESS_API_TS]: {
    main: "dist/server.js",
    scripts: {
      dev: "ts-node src/server.ts",
      build: "tsc",
      start: "npm run build && node dist/server.js",
    },
    requiredDependencies: {
      express: "^4.21.2",
    },
    devDependencies: {
      ...tsTooling,
      "@types/express": "^4.17.21",
    },
    files: () => [
      {
        name: "src/app.ts",
        content: `import express from "express";
import healthRouter from "./routes/health.route";

const app = express();

app.use(express.json());
app.use("/health", healthRouter);

export default app;
`,
      },
      {
        name: "src/routes/health.route.ts",
        content: `import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({ status: "ok", service: "express-api-ts" });
});

export default router;
`,
      },
      {
        name: "src/server.ts",
        content: `import app from "./app";

const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, () => {
  console.log(\`API running on port \${PORT}\`);
});
`,
      },
      {
        name: "tsconfig.json",
        content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`,
      },
    ],
  },
  [TEMPLATE_IDS.FASTIFY_API_TS]: {
    main: "dist/server.js",
    scripts: {
      dev: "ts-node src/server.ts",
      build: "tsc",
      start: "npm run build && node dist/server.js",
    },
    requiredDependencies: {
      fastify: "^4.28.1",
    },
    devDependencies: {
      ...tsTooling,
    },
    files: () => [
      {
        name: "src/server.ts",
        content: `import Fastify from "fastify";

const server = Fastify({ logger: true });
const PORT = Number(process.env.PORT ?? 3000);

server.get("/health", async () => {
  return { status: "ok", service: "fastify-api-ts" };
});

server
  .listen({ port: PORT, host: "0.0.0.0" })
  .then(() => {
    console.log(\`Fastify API running on port \${PORT}\`);
  })
  .catch((error) => {
    server.log.error(error);
    process.exit(1);
  });
`,
      },
      {
        name: "tsconfig.json",
        content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`,
      },
    ],
  },
  [TEMPLATE_IDS.CLI_TOOL_TS]: {
    main: "dist/index.js",
    scripts: {
      dev: "ts-node src/index.ts",
      build: "tsc",
      start: "npm run build && node dist/index.js",
    },
    requiredDependencies: {
      commander: "^12.1.0",
    },
    devDependencies: {
      ...tsTooling,
    },
    extraFields: (packageName: string) => ({
      bin: {
        [packageName]: "dist/index.js",
      },
    }),
    files: (payload) => [
      {
        name: "src/index.ts",
        content: `#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("${toPackageName(payload.description)}")
  .description("${payload.description || "CLI generated with Nodelizr"}")
  .version("${payload.version || "1.0.0"}");

program
  .command("hello")
  .description("Run a sample command")
  .action(() => {
    console.log("Hello from your Nodelizr CLI!");
  });

program.parse();
`,
      },
      {
        name: "tsconfig.json",
        content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`,
      },
    ],
  },
  [TEMPLATE_IDS.WORKER_SCHEDULER_JS]: {
    main: "src/worker.js",
    scripts: {
      dev: "node --watch src/worker.js",
      start: "node src/worker.js",
    },
    files: () => [
      {
        name: "src/worker.js",
        content: `require("dotenv").config();

console.log("Worker started");

setInterval(() => {
  const now = new Date().toISOString();
  console.log(\`[\${now}] Worker heartbeat\`);
}, 60_000);
`,
      },
    ],
  },
};

export function isTemplateSupported(templateId: string): templateId is TemplateId {
  return Object.prototype.hasOwnProperty.call(templateConfigs, templateId);
}

function resolveRangePrefix(fallbackVersion: string): string {
  if (fallbackVersion.startsWith("~")) {
    return "~";
  }

  if (fallbackVersion.startsWith("^")) {
    return "^";
  }

  return "^";
}

async function resolveLatestVersion(
  packageName: string,
  fallbackVersion: string
): Promise<string> {
  const now = Date.now();
  const cached = latestVersionCache.get(packageName);
  if (cached && cached.expiresAt > now) {
    return cached.version;
  }

  const latestVersion = await fetchLatestVersion(packageName);
  if (!latestVersion) {
    return fallbackVersion;
  }

  const resolvedVersion = `${resolveRangePrefix(fallbackVersion)}${latestVersion}`;

  latestVersionCache.set(packageName, {
    version: resolvedVersion,
    expiresAt: now + VERSION_CACHE_TTL_MS,
  });

  return resolvedVersion;
}

async function resolveDependencyVersions(
  dependencies?: Record<string, string>
): Promise<Record<string, string> | undefined> {
  if (!dependencies) {
    return undefined;
  }

  const resolvedEntries = await Promise.all(
    Object.entries(dependencies).map(async ([packageName, fallbackVersion]) => {
      const resolvedVersion = await resolveLatestVersion(
        packageName,
        fallbackVersion
      );
      return [packageName, resolvedVersion] as const;
    })
  );

  return Object.fromEntries(resolvedEntries);
}

function resolveTemplateId(templateId?: string): TemplateId {
  if (templateId && isTemplateSupported(templateId)) {
    return templateId;
  }

  return DEFAULT_TEMPLATE_ID;
}

function getTemplateName(templateId: TemplateId): string {
  return (
    PROJECT_TEMPLATES.find((template) => template.id === templateId)?.name ||
    "Node.js Starter (JavaScript)"
  );
}

async function buildProjectEntries(
  payload: GeneratePayload,
  templateId: TemplateId
) {
  const templateConfig = templateConfigs[templateId];
  const packageName = toPackageName(payload.description);
  const [requiredDependencies, devDependencies] = await Promise.all([
    resolveDependencyVersions(templateConfig.requiredDependencies),
    resolveDependencyVersions(templateConfig.devDependencies),
  ]);

  const packageJson = getPackageJson(
    {
      ...payload,
      libraries: Array.isArray(payload.libraries) ? payload.libraries : [],
      templateId,
    },
    {
      main: templateConfig.main,
      scripts: templateConfig.scripts,
      type: templateConfig.type,
      requiredDependencies,
      devDependencies,
      extraFields: templateConfig.extraFields?.(packageName),
    }
  );

  const templateName = getTemplateName(templateId);
  const entries: ZipEntry[] = [
    {
      name: "package.json",
      content: JSON.stringify(packageJson, null, 2),
    },
    ...templateConfig.files(payload),
    {
      name: "README.md",
      content: `# ${payload.description || "Generated via Nodelizr"}

This project was generated with [Nodelizr](https://github.com/Aethelon/Nodelizr-API).

## Starter Configuration

- Template: ${templateName}
- Preset: ${payload.presetId || "Custom"}

## Getting Started

1. Install dependencies:

   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

2. Configure environment variables (optional):

   Copy the .env.example file to .env and adjust as needed.

3. Run the project:

   \`\`\`bash
   npm start
   \`\`\`

## License

This project is licensed under the ${payload.license || "MIT"} license.

---

Automatically generated. Customize as needed and ship fast.
`,
    },
    {
      name: ".env.example",
      content: `# Example environment variables
NODE_ENV=development
PORT=3000
`,
    },
    {
      name: ".gitignore",
      content: `node_modules
.env
dist
package-lock.json
yarn.lock
`,
    },
    {
      name: "public/.gitkeep",
      content: "",
    },
    {
      name: "LICENSE",
      content: getLicenseText(
        payload.license || "MIT",
        payload.author || "Your Name"
      ),
    },
  ];

  return { entries, templateName };
}

export async function getTemplatePreview(
  templateId?: string
): Promise<TemplatePreviewResponse> {
  const resolvedTemplateId = resolveTemplateId(templateId);
  const previewPayload: GeneratePayload = {
    author: "Nodelizr",
    description: "preview-project",
    version: "1.0.0",
    license: "MIT",
    libraries: [],
    templateId: resolvedTemplateId,
    presetId: "preview",
  };

  const { entries, templateName } = await buildProjectEntries(
    previewPayload,
    resolvedTemplateId
  );

  return {
    templateId: resolvedTemplateId,
    templateName,
    files: entries.map((entry) => ({
      path: entry.name,
      content: entry.content,
    })),
  };
}

export async function generateProject(payload: GeneratePayload) {
  const templateId = resolveTemplateId(payload.templateId);
  const { entries } = await buildProjectEntries(payload, templateId);

  return createZip(entries);
}
