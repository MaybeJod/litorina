import { Card, CardHeader, CardFooter, CardTitle } from "./CustomEventCard";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  description: { type: string; children: { text: string }[] }[];
  eventDateTime: string;
  imageUrl?: string;
  documentId: string;
}

export const EventCard = ({ title, description, eventDateTime, documentId }: EventCardProps) => {
  const placeholderImage = "https://placehold.co/400x200";

  const formattedDate = new Date(eventDateTime).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const plainTextDescription = description?.[0]?.children?.[0]?.text ?? "";

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <img
          src={placeholderImage}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <div className="pl-4">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        <p className="text-gray-700 mt-2">{plainTextDescription}</p>
      </div>
      <CardFooter className="p-4 text-right">
        <Link
          to={`/events/${documentId}`}
          className="text-blue-500 hover:underline block"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};