import type { RichText } from "./RichTextInterface";

interface News {
  id: number;
  title: string;
  description: RichText[];
  publishedDate: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type { News };
