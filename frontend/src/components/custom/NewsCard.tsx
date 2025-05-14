import { Card, CardHeader, CardFooter, CardTitle } from "./CustomEventCard";
import { Link } from "react-router-dom";

interface NewsCardProps {
  title: string;
  description: string;
  publishedDate: string;
  imageUrl?: string;
  documentId: string;
}

const NewsCard = ({ title, publishedDate, imageUrl, documentId }: NewsCardProps) => {
  const placeholderImage = "https://placehold.co/400x200";

  const formattedDate = new Date(publishedDate).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <img
          src={imageUrl || placeholderImage}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <div className="pl-4">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
      <CardFooter className="p-4 text-right">
        <Link
          to={`/news/${documentId}`}
          className="text-blue-500 hover:underline block"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;