import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "./CustomNavigationCard";
import type { Nav } from "@/interfaces/NavInterface";

const IndexNavigationCard = ({
  title,
  url,
  media,
}: Pick<Nav, "title" | "url" | "media">) => {
  const imageUrl = media?.formats?.thumbnail?.url
    ? `http://litorina.onrender.com${media?.formats?.thumbnail?.url}`
    : "https://placehold.co/0";

  return (
    <Link to={url} className="block">
      <Card className="p-0 max-[640px]:aspect-[3/2] sm:aspect-[3/2] lg:aspect-square hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Background Image */}
        <CardHeader>
          <img src={imageUrl} alt={title} className="w-full object-cover" />
          {/* Overlay for title */}
          <div className="absolute bottom-5 left-0 w-[70%] bg-teal-800/80 text-white p-3">
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
};

export default IndexNavigationCard;
