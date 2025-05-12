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
        {/* Image Section */}
        <CardHeader className="p-0">
          <img
            src={imageUrl || "https://placehold.co/400"} // Placeholder image
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>

        {/* Title Section */}
        <CardFooter className="p-4">
          <CardTitle
            className="text-l text-center font-semibold truncate"
            title={title}
          >
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
}
