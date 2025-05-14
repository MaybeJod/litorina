import fetchHeroSection from "@/api/fetchHeroSection";
import type { HeroSection } from "@/interfaces/HerosectionInterface";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import fallbackImage from "@/assets/heroImage.png";

const HeroSectionLayout = () => {
  const [hero, setHero] = useState<HeroSection | null>(null);

  useEffect(() => {
    fetchHeroSection().then(setHero);
  }, []);

  if (!hero) return null;

  return (
    <section
      className="text-white text-center bg-cover bg-center w-screen"
      style={{
        backgroundImage: `url(${fallbackImage})`,
      }}
    >
      <h1 className="text-3xl md:text-7xl font-bold drop-shadow-md mb-2 pt-8">
        Discover Your Potential
      </h1>
      <p className="text-xl md:text-3xl drop-shadow-sm mb-4">
        Join our community by the Baltic Sea where <br />
        learning meets inspiration
      </p>

      <Button className="text-xl font-medium px-10 py-6 mb-8 rounded-full shadow-lg border-2 border-white">
        {hero.buttonText}
      </Button>
    </section>
  );
};

export default HeroSectionLayout;
