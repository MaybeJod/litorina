import type { Course } from "@/interfaces/CourseInterface";

const fetchCourseById = async (documentId: string): Promise<Course | null> => {
  try {
    const response = await fetch(
      `https://litorina.onrender.com/api/courses?filters[documentId][$eq]=${documentId}&populate=*`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }

    const jsonData = await response.json();

    if (jsonData.data && jsonData.data.length > 0) {
      const course = jsonData.data[0];

      const courseDetails: Course = {
        id: course.id,
        documentId: course.documentId,
        title: course.title,
        summary: course.summary,
        description: course.description,
        isFeatured: course.isFeatured,
        category: course.category,
        media: course.media,
        coursePeriod: course.coursePeriod,          
        application: course.application,
        costs: course.costs,
        moreInformation: course.moreInformation,
        place: course.place,
      };

      return courseDetails;
      console.log("Fetched course data:", course);
    }

    return null;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

export default fetchCourseById;
