import { Card, CardContent } from "@/components/ui/card";
import type { Course } from "@/interfaces/CourseInterface";

export const CourseCard = ({ course }: { course: Course }) => (
  <Card key={course.id} className="rounded-2xl shadow-md">
    <CardContent className="p-4">
      <div className="p-4">
        <h3 className="text-l text-center font-semibold" title={course.title}>
          {course.title}
        </h3>
      </div>
    </CardContent>
  </Card>
);
