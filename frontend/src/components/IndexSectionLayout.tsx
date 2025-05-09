import React from "react";
import type { Course } from "@/interfaces/CourseInterface";
import type { Nav } from "@/interfaces/NavInterface";
import type { News } from "@/interfaces/NewsInterface";

interface CardProps {
  type: "nav" | "course" | "news";
  item: Nav | Course | News;
}

// Dummy Card Component
const Card: React.FC<CardProps> = ({ type, item }) => {
  switch (type) {
    case "nav":
      const navItem = item as Nav;
      return (
        <div className="bg-white rounded-md shadow-md p-4">
          <a href={navItem.attributes.url} className="block hover:underline">
            {navItem.attributes.title}
          </a>
        </div>
      );
    case "course":
      const courseItem = item as Course;
      // Assuming you want to display the text content of the first paragraph
      const courseDescriptionText =
        courseItem.attributes.description[0]?.children
          .map((child) => child.text)
          .join("") || "";
      return (
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            {courseItem.attributes.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {courseDescriptionText.substring(0, 80)}...
          </p>
          {/* Add other course details as needed */}
        </div>
      );
    case "news":
      const newsItem = item as News;
      // Assuming you want to display the text content of the first paragraph
      const newsDescriptionText =
        newsItem.attributes.description[0]?.children
          .map((child) => child.text)
          .join("") || "";
      return (
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            {newsItem.attributes.title}
          </h3>
          <p className="text-gray-700 text-sm">
            {newsDescriptionText.substring(0, 100)}...
          </p>
          {newsItem.attributes.publishedDate && (
            <p className="text-gray-500 text-xs mt-1">
              Published on: {newsItem.attributes.publishedDate}
            </p>
          )}
          {/* Add other news details as needed */}
        </div>
      );
    default:
      return null;
  }
};

interface SectionProps {
  type: "nav" | "course" | "news";
  data: Nav[] | Course[] | News[] | null;
  title?: string;
}

const IndexSectionLayout: React.FC<SectionProps> = ({ type, data, title }) => {
  if (!data || data.length === 0) {
    return <div className="py-8">No {type} items available.</div>;
  }

  const sectionTitle =
    title || (type === "course" ? "Courses" : type === "news" ? "News" : "");

  return (
    <section className="py-8">
      {sectionTitle && (
        <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.slice(0, 4).map((item) => (
          <Card key={item.id} type={type} item={item} />
        ))}
      </div>
      {(type === "course" || type === "news") && data && data.length > 4 && (
        <div className="mt-6 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See All {sectionTitle}
          </button>
        </div>
      )}
    </section>
  );
};

export default IndexSectionLayout;
