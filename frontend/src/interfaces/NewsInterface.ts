import type { RichText } from "./RichTextInterface";

interface NewsAttributes {
  documentId: string;
  title: string;
  description: RichText[];
  publishedDate: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface News {
  id: number;
  attributes: NewsAttributes;
}

export type { News };
