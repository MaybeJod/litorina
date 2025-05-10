interface RichText {
  type: "paragraph";
  children: {
    text: string;
    type: "text";
  }[];
}

export type { RichText };
