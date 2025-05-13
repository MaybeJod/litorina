import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Skeleton } from "@/components/ui/skeleton";
import fetchCourses from "@/api/fetchCourses";
import { fetchCategories, fetchCoursesByCategory } from "@/api/fetchCategories";
import CourseCard from "@/components/custom/CourseCard";
import type { Course } from "@/interfaces/CourseInterface";
import type { Category } from "@/interfaces/CategoryInterface";

const Courses = () => {
  const [courseData, setCourseData] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    const fetchCourseData = async () => {
      setLoading(true);
      try {
        if (selectedCategory === "all") {
          const data = await fetchCourses();
          setCourseData(data);
        } else {
          const data = await fetchCoursesByCategory(selectedCategory);
          setCourseData(data);
        }
      } catch (error) {
        console.error("Failed to fetch courses", error);
        setCourseData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [selectedCategory]);

  return (
    <main className="flex flex-col items-center">
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

      {/* filter and courses section */}
      <div className="max-w-[70rem] mx-auto w-full px-6">
        {/* Category filter */}
        <div className="w-full flex justify-center mb-6">
          <ToggleGroup
            type="single"
            value={selectedCategory}
            onValueChange={(value) => value && setSelectedCategory(value)}
            className="w-fit mx-auto flex flex-wrap gap-1"
          >
            {/* All Courses button as the first item */}
            <ToggleGroupItem
              value="all"
              className="data-[state=on]:bg-[#5EAFAD] data-[state=on]:text-white hover:bg-[var(--index-section-background)] hover:text-black px-4 py-2 cursor-pointer"
            >
              All Courses
            </ToggleGroupItem>

            {categories.map((cat) => (
              <ToggleGroupItem
                key={cat.id}
                value={cat.slug}
                className="data-[state=on]:bg-[#5EAFAD] data-[state=on]:text-white hover:bg-[var(--index-section-background)] hover:text-black px-4 py-2 cursor-pointer"
              >
                {cat.title}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Course grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courseData.length > 0 ? (
              courseData.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  documentId={course.documentId}
                  imageUrl={
                    course.media?.url || course.media?.formats?.thumbnail?.url
                      ? `http://litorina.onrender.com${
                          course.media?.formats?.thumbnail?.url ||
                          course.media?.url
                        }`
                      : "https://placehold.co/400"
                  }
                />
              ))
            ) : (
              <p className="col-span-full text-center py-8">
                No courses found in this category.
              </p>
            )}
          </section>
        )}
      </div>
    </main>
  );
};

export default Courses;
