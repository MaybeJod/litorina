import type { Course } from "@/interfaces/CourseInterface";

const fetchCourseById = async (id: number): Promise<Course | null> => {
  try {
    const response = await fetch(
      `https://litorina.onrender.com/api/courses/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }
    const jsonData = await response.json();

    const course: Course = {
      id: jsonData.data.id,
      documentId: jsonData.data.documentId,
      title: jsonData.data.title,
      summary: jsonData.data.summary,
      description: jsonData.data.description,
      isFeatured: jsonData.data.isFeatured,
      category: jsonData.data.category,
      media: jsonData.data.media,
    };

    return course;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

export default fetchCourseById;
