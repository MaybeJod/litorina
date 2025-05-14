import type { Course } from "@/interfaces/CourseInterface";

const fetchCourseBySlug = async (slug: string): Promise<Course | null> => {
  try {
    const response = await fetch(
      `https://litorina.onrender.com/api/courses?filters[slug][$eq]=${slug}&populate=*`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }

    const jsonData = await response.json();

    if (jsonData.data && jsonData.data.length > 0) {
      const course = jsonData.data[0];

      const courseDetails: Course = {
        id: course.id,
        slug: course.slug,
        title: course.title,
        summary: course.summary,
        description: course.description,
        isFeatured: course.isFeatured,
        category: course.category,
        media: course.media,
      };

      return courseDetails;
    }

    return null;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

export default fetchCourseBySlug;
