import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchHomeNavigationCard from "@/api/fetchHomeNavigationCard";
import type { HomeNavigationCardItem } from "@/interfaces/HomeNavigationCardInterface";
import { Card, CardContent } from "@/components/custom/CustomNavigationCard";

const HomeNavigationCard = () => {
  const [cards, setCards] = useState<HomeNavigationCardItem[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      const data = await fetchHomeNavigationCard();
      setCards(data);
    };

    loadCards();
  }, []);

  return (
    <section className="container mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-2">Explore Litorina</h2>
      <p className="text-muted-foreground mb-10">
        See our educational offerings and facilities
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link to={card.url} key={card.id}>
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-lg font-medium px-4 py-3">
                {card.title}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeNavigationCard;
