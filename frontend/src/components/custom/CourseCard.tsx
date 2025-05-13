import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, CardTitle } from "./CustomCourseCard";

export default function CourseCard({
  title,
  imageUrl,
  documentId,
}: {
  title: string;
  imageUrl: string;
  documentId: string;
}) {
  return (
    <Link to={`/courses/${documentId}`} className="block">
      <Card className="w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <img
            src={imageUrl || "https://placehold.co/400"}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </CardHeader>
        <CardFooter className="p-4">
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
}
