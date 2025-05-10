import type { Course } from "@/interfaces/CourseInterface";

const fetchFeaturedCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch("https://litorina.onrender.com/api/courses");

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const jsonData = await response.json();

    const courses = jsonData.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      summary: item.summary,
      isFeatured: item.isFeatured,
    }));

    return courses.filter((course: Course) => course.isFeatured === true).slice(0,4);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export default fetchFeaturedCourses;
