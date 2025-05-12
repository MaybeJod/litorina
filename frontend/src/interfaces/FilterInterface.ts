interface Category {
  id: number;
  title: string;
  slug: string;
}

interface Course {
  id: number;
  title: string;
  category: Category;
}

export type { Category, Course };
