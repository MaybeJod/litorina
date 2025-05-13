import React, { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { fetchCategories, fetchCoursesByCategory } from "@/api/fetchCategories";
import type { Category } from "@/interfaces/CategoryInterface";
import type { Course } from "@/interfaces/CourseInterface";
import CourseCard from "@/components/custom/CourseCard";

const FilterCategory: React.FC = () => {
  const [category, setCategory] = useState<string>();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setCategory(data[0].slug);
      })
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  useEffect(() => {
    if (!category) return;

    setLoading(true);
    fetchCoursesByCategory(category)
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses", err))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="max-w-[70rem] mx-auto p-6">
      <ToggleGroup
        type="single"
        value={category}
        onValueChange={(val) => val && setCategory(val)}
        className="w-fit mx-auto flex flex-wrap gap-2 mb-6"
      >
        {categories.map((cat) => (
          <ToggleGroupItem
            key={cat.id}
            value={cat.slug}
            className="bg-yellow-200 data-[state=on]:bg-yellow-300 px-4 py-2 rounded-md"
          >
            {cat.title}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                imageUrl={course.media?.url || ""}
                documentId={course.documentId}
              />
            ))
          ) : (
            <p>No courses found in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterCategory;
