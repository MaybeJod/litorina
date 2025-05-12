import type {  HomeNavigationCardItem } from "@/interfaces/HomeNavigationCardInterface";

/**
 * Fetches home navigation cards from the Strapi CMS.
 * Filters cards that are marked as featured and returns the top 4.
 */
const fetchHomeNavigationCard = async (): Promise< HomeNavigationCardItem[]> => {
  try {
    const response = await fetch(
      "https://litorina.onrender.com/api/home-navigation-cards?populate=*"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch home navigation cards");
    }

    const jsonData = await response.json();

    const cards:  HomeNavigationCardItem[] = jsonData.data.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      image: item.attributes.image?.data?.attributes?.url || "",
      url: item.attributes.url,
      order: item.attributes.order,
      isFeatured: item.attributes.isFeatured,
    }));

    return cards
      .filter((card) => card.isFeatured === true)
      .sort((a, b) => a.order - b.order)
      .slice(0, 4);
  } catch (error) {
    console.error("Error fetching home navigation cards:", error);
    return [];
  }
};

export default fetchHomeNavigationCard;
