import {
  ProjectPresetOption,
  ProjectTemplateOption,
  TEMPLATE_IDS,
  TemplateId,
} from "../dto/options.dto.js";

export const DEFAULT_TEMPLATE_ID: TemplateId = TEMPLATE_IDS.NODE_BASIC_JS;

export const PROJECT_TEMPLATES: ProjectTemplateOption[] = [
  {
    id: TEMPLATE_IDS.NODE_BASIC_JS,
    name: "Node.js Starter (JavaScript)",
    description: "Lean starter for Node.js services and scripts in JavaScript.",
    category: "Starter",
    tree: [
      {
        label: "src",
        icon: "pi pi-folder",
        children: [{ label: "index.js", icon: "pi pi-file" }],
      },
      { label: "public", icon: "pi pi-folder" },
      { label: "package.json", icon: "pi pi-file" },
      { label: "README.md", icon: "pi pi-file" },
      { label: ".env.example", icon: "pi pi-file" },
      { label: ".gitignore", icon: "pi pi-file" },
      { label: "LICENSE", icon: "pi pi-file" },
    ],
  },
  {
    id: TEMPLATE_IDS.EXPRESS_API_TS,
    name: "Express API (TypeScript)",
    description: "REST API structure with Express + TypeScript, ready to scale.",
    category: "Backend API",
    tree: [
      {
        label: "src",
        icon: "pi pi-folder",
        children: [
          { label: "app.ts", icon: "pi pi-file" },
          { label: "server.ts", icon: "pi pi-file" },
          {
            label: "routes",
            icon: "pi pi-folder",
            children: [{ label: "health.route.ts", icon: "pi pi-file" }],
          },
        ],
      },
      { label: "public", icon: "pi pi-folder" },
      { label: "package.json", icon: "pi pi-file" },
      { label: "tsconfig.json", icon: "pi pi-file" },
      { label: "README.md", icon: "pi pi-file" },
      { label: ".env.example", icon: "pi pi-file" },
      { label: ".gitignore", icon: "pi pi-file" },
      { label: "LICENSE", icon: "pi pi-file" },
    ],
  },
  {
    id: TEMPLATE_IDS.FASTIFY_API_TS,
    name: "Fastify API (TypeScript)",
    description:
      "High-performance API with Fastify + TypeScript and healthcheck route.",
    category: "Backend API",
    tree: [
      {
        label: "src",
        icon: "pi pi-folder",
        children: [{ label: "server.ts", icon: "pi pi-file" }],
      },
      { label: "public", icon: "pi pi-folder" },
      { label: "package.json", icon: "pi pi-file" },
      { label: "tsconfig.json", icon: "pi pi-file" },
      { label: "README.md", icon: "pi pi-file" },
      { label: ".env.example", icon: "pi pi-file" },
      { label: ".gitignore", icon: "pi pi-file" },
      { label: "LICENSE", icon: "pi pi-file" },
    ],
  },
  {
    id: TEMPLATE_IDS.CLI_TOOL_TS,
    name: "CLI Tool (TypeScript)",
    description:
      "CLI foundation with TypeScript and a ready-to-use executable entry point.",
    category: "Tooling",
    tree: [
      {
        label: "src",
        icon: "pi pi-folder",
        children: [{ label: "index.ts", icon: "pi pi-file" }],
      },
      { label: "public", icon: "pi pi-folder" },
      { label: "package.json", icon: "pi pi-file" },
      { label: "tsconfig.json", icon: "pi pi-file" },
      { label: "README.md", icon: "pi pi-file" },
      { label: ".env.example", icon: "pi pi-file" },
      { label: ".gitignore", icon: "pi pi-file" },
      { label: "LICENSE", icon: "pi pi-file" },
    ],
  },
  {
    id: TEMPLATE_IDS.WORKER_SCHEDULER_JS,
    name: "Worker/Scheduler (JavaScript)",
    description:
      "Template for jobs, queues, and scheduled routines in Node.js.",
    category: "Workers",
    tree: [
      {
        label: "src",
        icon: "pi pi-folder",
        children: [{ label: "worker.js", icon: "pi pi-file" }],
      },
      { label: "public", icon: "pi pi-folder" },
      { label: "package.json", icon: "pi pi-file" },
      { label: "README.md", icon: "pi pi-file" },
      { label: ".env.example", icon: "pi pi-file" },
      { label: ".gitignore", icon: "pi pi-file" },
      { label: "LICENSE", icon: "pi pi-file" },
    ],
  },
];

export const PROJECT_PRESETS: ProjectPresetOption[] = [
  {
    id: "saas-api",
    name: "SaaS API",
    description:
      "Opinionated stack for SaaS product APIs with auth and relational database.",
    templateId: TEMPLATE_IDS.EXPRESS_API_TS,
    recommendedLibraries: [
      "express",
      "cors",
      "helmet",
      "morgan",
      "dotenv",
      "jsonwebtoken",
      "bcrypt",
      "prisma",
      "pg",
      "joi",
    ],
  },
  {
    id: "public-api",
    name: "Public API",
    description:
      "Preset for public APIs with baseline protection, docs, and observability.",
    templateId: TEMPLATE_IDS.EXPRESS_API_TS,
    recommendedLibraries: [
      "express",
      "cors",
      "helmet",
      "morgan",
      "express-rate-limit",
      "swagger-ui-express",
      "swagger-jsdoc",
      "dotenv",
    ],
  },
  {
    id: "microservice-events",
    name: "Microservice Events",
    description:
      "Foundation for event-driven microservices with messaging and tracing.",
    templateId: TEMPLATE_IDS.FASTIFY_API_TS,
    recommendedLibraries: [
      "fastify",
      "amqplib",
      "dotenv",
      "pino",
      "uuid",
      "@opentelemetry/api",
    ],
  },
  {
    id: "cli-automation",
    name: "CLI Automation",
    description:
      "Preset for terminal-based automation and internal tooling.",
    templateId: TEMPLATE_IDS.CLI_TOOL_TS,
    recommendedLibraries: ["commander", "chalk", "dotenv", "axios", "yargs"],
  },
  {
    id: "scheduler-worker",
    name: "Scheduler / Worker",
    description:
      "Preset focused on asynchronous processing and recurring jobs.",
    templateId: TEMPLATE_IDS.WORKER_SCHEDULER_JS,
    recommendedLibraries: ["bull", "redis", "node-schedule", "dotenv", "pino"],
  },
  {
    id: "web-scraping",
    name: "Web Scraping",
    description:
      "Preset for data collection, scraping, and HTTP integration routines.",
    templateId: TEMPLATE_IDS.NODE_BASIC_JS,
    recommendedLibraries: ["axios", "cheerio", "dotenv", "date-fns"],
  },
];
