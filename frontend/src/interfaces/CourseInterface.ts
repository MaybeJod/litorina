import type { RichText } from "./RichTextInterface";

interface Course {
  id: number;
  title: string;
  description: RichText[];
  summary: string | null;
  isFeatured: boolean | null;
}

export type { Course };
