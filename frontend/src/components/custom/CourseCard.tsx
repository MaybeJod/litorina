import type { Media } from "@/interfaces/MediaInterface";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, CardTitle } from "./CustomCourseCard";

interface CourseCardProps {
  slug: string;
  title: string;
  media: Media | null;
  documentId?: string;
}

const CourseCard = ({ slug, title, media }: CourseCardProps) => {
  const imageUrl = media?.formats?.thumbnail?.url
    ? `http://litorina.onrender.com${media?.formats?.thumbnail?.url}`
    : "https://placehold.co/0";
  return (
    <Link to={`/courses/${slug}`} className="block">
      <Card className="w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
        </CardHeader>
        <CardFooter className="p-6">
          <CardTitle
            className="text-l text-center font-semibold overflow-x-clip text-ellipsis whitespace-nowrap"
            title={title}
          >
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
