import type { RichText } from "./RichTextInterface";

interface CourseAttributes {
  documentId: string;
  title: string;
  description: RichText[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string | null;
  summary: string | null;
  isFeatured: boolean | null;
  coursePeriod: string | null;
  application: string | null;
  costs: string | null;
  moreInformation: string | null;
  place: string | null;
}

interface Course {
  id: number;
  attributes: CourseAttributes;
}

export type { Course };
