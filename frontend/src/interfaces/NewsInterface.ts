import type { RichText } from "./RichTextInterface";
import type { Media } from "./MediaInterface";

interface News {
  id: number;
  title: string;
  description: RichText[];
  publishedDate: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media: Media | null;
}

export type { News };
