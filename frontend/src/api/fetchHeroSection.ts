import type { HeroSection } from "@/interfaces/HerosectionInterface";

const fetchHeroSection = async (): Promise<HeroSection | null> => {
  try {
    const response = await fetch(
      "https://litorina.onrender.com/api/hero-section?populate=*"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch hero section items");
    }
    const json = await response.json();

    const item = json.data;

    return {
      buttonText: item.buttonText,
      backgroundImageUrl: item.media?.url || null,
    };
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return null;
  }
};

export default fetchHeroSection;
