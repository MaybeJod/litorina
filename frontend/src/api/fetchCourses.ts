import type { Course } from "@/interfaces/CourseInterface";

const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch(
      "https://litorina.onrender.com/api/courses?populate=*"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const jsonData = await response.json();

    const courses = jsonData.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      media: item.media,
    }));

    return courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export default fetchCourses;
