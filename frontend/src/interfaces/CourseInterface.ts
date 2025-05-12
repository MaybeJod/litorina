import type { RichText } from "./RichTextInterface";

interface Course {
  id: number;
  documentId: string;
  title: string;
  description: RichText[];
  summary: string | null;
  isFeatured: boolean | null;
  category: Category;
  imageUrl: string | null;
}

export type { Course };
