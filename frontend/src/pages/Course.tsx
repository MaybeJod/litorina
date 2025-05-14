import { useParams } from "react-router-dom";
import CourseInfoText from "@/components/courseInfoText/CourseInfoText";
import CourseTabs from "@/components/courseInfoText/CourseTabs";

const Course = () => {
  const { documentId } = useParams<{ documentId: string }>();

  if (!documentId) return <p>No course ID provided.</p>;

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <CourseInfoText documentId={documentId} />
      <CourseTabs />
    </main>
  );
};

export default Course;
