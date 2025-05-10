import type { News } from "@/interfaces/NewsInterface";

const fetchFeaturedNews = async (): Promise<News[]> => {
  try {
    const response = await fetch(
      "https://litorina.onrender.com/api/news-articles"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news articles");
    }

    const jsonData = await response.json();

    const featuredNews = jsonData.data
      .map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        publishedAt: item.publishedAt,
      }))
      .sort((a: { publishedAt: string }, b: { publishedAt: string }) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);

        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 4);

    return featuredNews;
  } catch (error) {
    console.error("Error fetching featured news:", error);
    return [];
  }
};

export default fetchFeaturedNews;
