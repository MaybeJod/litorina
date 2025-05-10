export interface NavigationItem {
  title: string;
  url: string;
  order: number;
  id: number;
}

// interface ApiResponseItem {
//     title: string;
//     url: string;
//     order: number;
//   }

export async function getNavigationItems(): Promise<NavigationItem[]> {
  try {
    const response = await fetch(
      "https://litorina.onrender.com/api/navigation-items"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch navigation items");
    }
    const data = await response.json();
    return data.data.sort(
      (a: { order: number }, b: { order: number }) => a.order - b.order
    );
  } catch (error) {
    console.error("Error fetching navigation items:", error);
    return [];
  }
}
