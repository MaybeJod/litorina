import type { Media } from "./MediaInterface";

interface Nav {
  id: number;
  title: string;
  url: string;
  order: number;
  media: Media | null;
}

export type { Nav };
