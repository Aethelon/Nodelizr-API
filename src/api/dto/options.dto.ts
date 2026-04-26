export const TEMPLATE_IDS = {
  NODE_BASIC_JS: "node-basic-js",
  EXPRESS_API_TS: "express-api-ts",
  FASTIFY_API_TS: "fastify-api-ts",
  CLI_TOOL_TS: "cli-tool-ts",
  WORKER_SCHEDULER_JS: "worker-scheduler-js",
} as const;

export type TemplateId = (typeof TEMPLATE_IDS)[keyof typeof TEMPLATE_IDS];

export interface TemplateTreeNode {
  label: string;
  icon: "pi pi-folder" | "pi pi-file";
  children?: TemplateTreeNode[];
}

export interface ProjectTemplateOption {
  id: TemplateId;
  name: string;
  description: string;
  category: string;
  tree: TemplateTreeNode[];
}

export interface ProjectPresetOption {
  id: string;
  name: string;
  description: string;
  templateId: TemplateId;
  recommendedLibraries: string[];
}

export interface GenerationOptionsResponse {
  templates: ProjectTemplateOption[];
  presets: ProjectPresetOption[];
}
