import fetchCourses from "@/api/fetchCourses";
import CourseCard from "@/components/custom/CourseCard";
import { useEffect, useState } from "react";

import type { Course } from "@/interfaces/CourseInterface";

const Courses = () => {
  const [courseData, setCourseData] = useState<Course[] | null>(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const data = await fetchCourses();
        console.log("data here lol:" + data);
        setCourseData(data);
      } catch (error) {
        console.error("error:" + error);
        setCourseData(null);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <main className="flex flex-col items-center ">
      {/* banner section */}
      <section className="w-full">
        <img
          src="https://images.unsplash.com/photo-1543875222-8a50d1903ffc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Courses banner"
          className="object-cover w-full aspect-4/1"
        />
      </section>

      {/* title */}
      <h1 className="text-6xl text-center m-6 font-bold">COURSES</h1>

      {/* filter component */}
      <div className="flex gap-1 border-2 border-grays-600 border-solid p-3 flex-wrap">
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
      </div>

      {/* course grid section */}
      <section className="grid grid-cols-[repeat(auto-fill,minmax(max(200px,calc((100%_-_3.75rem)/4)),1fr))] gap-5 w-[min(1000px,_100%)] mt-10">
        {courseData?.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            documentId={course.documentId}
            imageUrl={
              course.media?.formats?.thumbnail?.url
                ? `http://litorina.onrender.com${course.media?.formats?.thumbnail?.url}`
                : "https://placehold.co/400"
            }
          />
        ))}
      </section>
    </main>
  );
};

export default Courses;
