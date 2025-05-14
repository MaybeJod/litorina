import { useParams } from "react-router-dom";
import CourseInfoText from "@/components/courseInfoText/CourseInfoText";
import Breadcrumbs from "@/components/custom/Breadcrumbs";

const Course = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <p>No course slug provided.</p>;

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <section>
        <Breadcrumbs />
      </section>
      <CourseInfoText slug={slug} />
    </main>
  );
};

export default Course;
