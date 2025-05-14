import type { RichText } from "./RichTextInterface";
import type { Media } from "./MediaInterface";

interface News {
  id: number;
  documentId: string;
  title: string;
  description: RichText[];
  publishedDate: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media: Media | null;
  slug: string;
}

export type { News };
