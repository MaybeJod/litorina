interface Media {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
  documentId: string;
  ext: string;
  formats: any | null;
  hash: string;
  height: number | null;
  id: number;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  publishedAt: string;
  size: number;
  updatedAt: string;
  url: string;
  width: number | null;
}

export type { Media };