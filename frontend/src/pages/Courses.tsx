import type { Course } from "@/interfaces/CourseInterface";
import type { Category } from "@/interfaces/CategoryInterface";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fetchCategories, fetchCoursesByCategory } from "@/api/fetchCategories";
import fetchCourses from "@/api/fetchCourses";
import CardGridContainer from "@/components/custom/CardGridContainer";
import CourseCard from "@/components/custom/CourseCard";

const Courses = () => {
  const [courseData, setCourseData] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  //state to track the current category name for dropdown display
  const [currentCategoryName, setCurrentCategoryName] = useState("All Courses");
  const isMobile = useMediaQuery("(max-width: 900px)");

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
          setCurrentCategoryName("All Courses");
        } else {
          const data = await fetchCoursesByCategory(selectedCategory);
          setCourseData(data);
          const category = categories.find(
            (cat) => cat.slug === selectedCategory
          );
          if (category) setCurrentCategoryName(category.title);
        }
      } catch (error) {
        console.error("Failed to fetch courses", error);
        setCourseData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [selectedCategory, categories]);

  const handleCategoryChange = (value: string) => {
    if (value) {
      setSelectedCategory(value);
    }
  };

  return (
    <>
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
      <div className="w-full flex justify-center mb-6">
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-[#f0f0f0] hover:bg-[var(--index-section-background)] rounded-md border border-gray-200">
              {currentCategoryName} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => handleCategoryChange("all")}
                className={`cursor-pointer hover:bg-[var(--index-section-background)] ${
                  selectedCategory === "all"
                    ? "font-bold bg-[#5EAFAD] text-white"
                    : ""
                }`}
              >
                All Courses
              </DropdownMenuItem>
              {categories.map((cat) => (
                <DropdownMenuItem
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`cursor-pointer hover:bg-[var(--index-section-background)]${
                    selectedCategory === cat.slug
                      ? "font-bold bg-[#5EAFAD] text-white"
                      : ""
                  }`}
                >
                  {cat.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <ToggleGroup
            type="single"
            value={selectedCategory}
            onValueChange={(value) => value && handleCategoryChange(value)}
            className="w-fit mx-auto flex flex-wrap gap-1"
          >
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
        )}
      </div>

      {/* Course grid */}
      {loading ? (
        <CardGridContainer>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ))}
        </CardGridContainer>
      ) : (
        <CardGridContainer>
          {courseData.length > 0 ? (
            courseData.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                documentId={course.documentId}
                media={course.media}
              />
            ))
          ) : (
            <p className="col-span-full text-center py-8">
              No courses found in this category.
            </p>
          )}
        </CardGridContainer>
      )}
    </>
  );
};

export default Courses;
