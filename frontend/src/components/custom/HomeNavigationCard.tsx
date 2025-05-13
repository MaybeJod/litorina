import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "./CustomNavigationCard"; // Removed CardFooter
import type { Nav } from "@/interfaces/NavInterface";

export default function HomeNavigationCard({
  title,
  url,
  media,
}: Pick<Nav, "title" | "url" | "media">) {
  const imageUrl =
    media?.url || "https://placehold.co/400x300?text=Navigation+Card";

  return (
    <Link to={url} className="block">
      <Card className="w-full h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Background Image */}
        <CardHeader className="p-0 relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Overlay for title */}
          <div className="absolute bottom-0 left-0 w-full bg-teal-800/80 text-white p-3">
            <CardTitle
              className="text-base font-semibold text-center truncate"
              title={title}
            >
              {title}
            </CardTitle>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
