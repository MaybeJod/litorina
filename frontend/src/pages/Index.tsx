import type { Nav } from "@/interfaces/NavInterface";
import type { Course } from "@/interfaces/CourseInterface";
import type { News } from "@/interfaces/NewsInterface";
import React, { useEffect, useState } from "react";
import fetchFeaturedNavigation from "@/api/fetchFeaturedNavigation";
import fetchFeaturedCourses from "@/api/fetchFeaturedCourses";
import fetchFeaturedNews from "@/api/fetchFeaturedNews";
import IndexSectionLayout from "@/components/custom/IndexSectionLayout";
//import { HeroSectionLayout } from "@/components/custom/HeroSection";

const Index: React.FC = () => {
  const [featuredNavData, setFeaturedNavData] = useState<Nav[] | null>(null);
  const [featuredCoursesData, setFeaturedCoursesData] = useState<
    Course[] | null
  >(null);
  const [featuredNewsData, setFeaturedNewsData] = useState<News[] | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const [
        featuredNavResponse,
        featuredCoursesResponse,
        featuredNewsResponse,
      ] = await Promise.allSettled([
        fetchFeaturedNavigation(),
        fetchFeaturedCourses(),
        fetchFeaturedNews(),
      ]);

      if (featuredNavResponse.status === "fulfilled")
        setFeaturedNavData(featuredNavResponse.value);

      if (featuredCoursesResponse.status === "fulfilled")
        setFeaturedCoursesData(featuredCoursesResponse.value);
      
      if (featuredNewsResponse.status === "fulfilled")
        setFeaturedNewsData(featuredNewsResponse.value);
    };

    fetchAllData();
  }, []);

  return (
    <main className="container mx-auto py-8">
      {/* <HeroSectionLayout /> */}
      {featuredNavData && (
        <IndexSectionLayout type="nav" data={featuredNavData} />
      )}
      {featuredCoursesData && (
        <IndexSectionLayout
          type="course"
          data={featuredCoursesData}
          title="Featured Courses"
          buttonText="Courses"
        />
      )}
      {featuredNewsData && (
        <IndexSectionLayout
          type="news"
          data={featuredNewsData}
          title="Latest News"
          buttonText="News"
        />
      )}
    </main>
  );
};

export default Index;
