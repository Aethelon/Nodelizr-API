import { TemplateId } from "./options.dto.js";

export interface Library {
  name: string;
  description: string;
  category: string;
  version?: string;
}

export interface SelectedLibrary {
  name: string;
  version?: string;
}

export interface GeneratePayload {
  author: string;
  description: string;
  version: string;
  libraries: SelectedLibrary[];
  license?: string;
  templateId?: TemplateId;
  presetId?: string;
}
