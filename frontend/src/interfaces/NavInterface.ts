interface NavAttributes {
  documentId: string;
  title: string;
  order: number | null;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Nav {
  id: number;
  attributes: NavAttributes;
}

export type { Nav };
