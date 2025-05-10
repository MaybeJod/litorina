import type { Nav } from "@/interfaces/NavInterface";

const fetchIndexNavItems = async (): Promise<Nav[]> => {
  try {
    const response = await fetch(
      "https://litorina.onrender.com/api/home-navigation-cards"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch home navigation items");
    }

    const jsonData = await response.json();

    const navItems = jsonData.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      order: item.order,
    }));

    return navItems.sort(
      (a: { order: number }, b: { order: number }) => a.order - b.order
    );
  } catch (error) {
    console.error("Error fetching home navigation items:", error);
    return [];
  }
};

export default fetchIndexNavItems;
