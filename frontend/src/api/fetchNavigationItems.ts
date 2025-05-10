export interface NavigationItem {
  title: string;
  url: string;
  order: number;
}

interface ApiResponseItem {
    title: string;
    url: string;
    order: number;
  }

export async function getNavigationItems(): Promise<NavigationItem[]> {
    try {
        const response = await fetch(
            "https://litorina.onrender.com/api/navigation-items"
        );
        if (!response.ok) {
            throw new Error("Failed to fetch navigation items");
        }
        const responseData = await response.json();
        const navigationItems:ApiResponseItem[] = responseData.data;

        return navigationItems.map((item: ApiResponseItem) => ({
            title: item.title,
            url: item.url,
            order: item.order,
        }))
        .sort((a: NavigationItem, b: NavigationItem) => a.order - b.order);
       
    }
    catch (error) {
        console.error("Error fetching navigation items:", error);
        return [];
    }
}

