import fetchHeroSection from "@/api/fetchHeroSection";
import type { HeroSection } from "@/interfaces/HerosectionInterface";
import { useEffect, useState } from "react";
import fallbackImage from "@/assets/heroImage.png";
import { Link } from "react-router-dom";

const HeroSectionLayout = () => {
  const [hero, setHero] = useState<HeroSection | null>(null);

  useEffect(() => {
    fetchHeroSection().then(setHero);
  }, []);

  if (!hero) return null;

  return (
    <section
      className="text-white text-center bg-cover bg-center h-[232px] md:h-[300px] relative"
      style={{
        backgroundImage: `url(${fallbackImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(53,190,192,0.24)] to-[rgba(25,89,90,0.12)] z-0" />

      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-7xl font-bold drop-shadow-lg mb-2 pt-8">
          Discover Your Potential
        </h1>
        <p className="text-xl md:text-3xl drop-shadow-md mb-4">
          Join our community by the Baltic Sea where <br />
          learning meets inspiration
        </p>

        <Link
          to="/courses"
          className="text-lg font-medium rounded-full shadow-xl border-2 border-white bg-[var(--button-primary)] md:text-xl px-10 py-2 mb-8 inline-block"
        >
          {hero.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default HeroSectionLayout;
