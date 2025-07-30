export interface Library {
  name: string;
  description: string;
  category: string;
  version?: string;
}

export interface GeneratePayload {
  author: string;
  description: string;
  version: string;
  libraries: Library[];
  license?: string;
}
