import { PROJECT_PRESETS, PROJECT_TEMPLATES } from "../data/project-options.data.js";
import { GenerationOptionsResponse } from "../dto/options.dto.js";

export function getGenerationOptions(): GenerationOptionsResponse {
  return {
    templates: PROJECT_TEMPLATES,
    presets: PROJECT_PRESETS,
  };
}
