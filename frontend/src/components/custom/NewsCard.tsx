import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "./CustomCourseCard";
import type { News } from "@/interfaces/NewsInterface";

interface NewsCardProps {
  title: string;
  documentId: string;
  publishedDate?: string;
  imageUrl?: string;
}

export default function NewsCard({
  title,
  documentId,
  publishedDate,
  imageUrl,
}: NewsCardProps) {
  // Format date if available
  const formattedDate = publishedDate 
    ? new Date(publishedDate).toLocaleDateString() 
    : null;

  return (
    <Link to={`/news/${documentId}`} className="block">
      <Card className="w-full hover:shadow-lg transition-shadow duration-300">
        {/* Image Section */}
        <CardHeader className="p-0">
          <img
            src={imageUrl || "https://placehold.co/400"} // Placeholder image
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>

        {/* Content Section */}
        <CardContent className="p-4">
          <CardTitle
            className="text-l font-semibold truncate mb-2"
            title={title}
          >
            {title}
          </CardTitle>
          
          {/* Date display if available */}
          {formattedDate && (
            <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}