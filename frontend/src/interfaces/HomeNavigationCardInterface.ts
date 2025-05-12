export interface HomeNavigationCardItem {
  id: number;
  title: string;
  image: string;
  url: string;
  order: number;
  isFeatured: boolean; // ✅ Add this line
}
