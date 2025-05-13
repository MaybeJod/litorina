import type { Course } from "@/interfaces/CourseInterface";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, CardTitle } from "./CustomCourseCard";

export default function CourseCard ({ title, media, documentId }: Course) {
  const imageUrl = media?.formats?.thumbnail?.url
    ? `http://litorina.onrender.com${media?.formats?.thumbnail?.url}`
    : "https://placehold.co/0";

  return (
    <Link to={`/courses/${documentId}`} className="block">
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

