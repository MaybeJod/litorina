import type { Course } from "@/interfaces/CourseInterface";

const fetchFeaturedCourses = async (): Promise<Course[]> => {
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
      isFeatured: item.isFeatured,
    }));

    return courses
      .filter((course: Course) => course.isFeatured === true)
      .slice(0, 4);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export default fetchFeaturedCourses;
