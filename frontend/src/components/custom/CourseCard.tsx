import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, CardTitle } from "./CustomCourseCard";
import type { Course } from "@/interfaces/CourseInterface";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const { title, imageUrl, documentId } = course;

  return (
    <Link to={`/courses/${documentId}`} className="block">
      <Card className="w-full hover:shadow-lg transition-shadow duration-300 rounded-2xl">
        {/* Image Section */}
        <CardHeader className="p-0">
          <img
            src={imageUrl ?? "https://placehold.co/400"}
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
};
