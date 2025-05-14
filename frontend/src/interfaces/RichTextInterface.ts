export interface RichText {
  type: string;
  text?: string;
  url?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  level?: number; // for heading level like h1, h2, etc.
  children?: RichText[];
}
