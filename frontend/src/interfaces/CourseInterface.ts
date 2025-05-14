import type { RichText } from "./RichTextInterface";
import type { Media } from "./MediaInterface";

interface Course {
  id: number;
  slug: string;
  documentId?: string;
  title: string;
  description: RichText[];
  summary: string | null;
  isFeatured: boolean | null;
  media: Media | null;
  category: any;
}

export type { Course };
