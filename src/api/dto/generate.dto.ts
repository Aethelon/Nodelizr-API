export interface Library {
  name: string;
  version?: string;
}

export interface GeneratePayload {
  author: string;
  description: string;
  version: string;
  libraries: Library[];
}
