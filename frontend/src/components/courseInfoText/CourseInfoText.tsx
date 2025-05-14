import React, { useEffect, useState } from "react";
import fetchCourseById from "@/api/fetchCourse";
import CourseTabs from "./CourseTabs";
import type { Course } from "@/interfaces/CourseInterface";
import type { RichText } from "@/interfaces/RichTextInterface";

interface CourseInfoTextProps {
  documentId: string;
}

const CourseInfoText: React.FC<CourseInfoTextProps> = ({ documentId }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const renderRichText = (node: RichText): React.ReactNode => {
    if (!node) return null;

    if (node.type === "text") {
      let content: React.ReactNode = node.text;

      if (node.bold) content = <strong>{content}</strong>;
      if (node.italic) content = <em>{content}</em>;
      if (node.underline) content = <u>{content}</u>;
      if (node.code) content = <code>{content}</code>;

      return content;
    }

    switch (node.type) {
      case "heading":
        switch (node.level) {
          case 1:
            return (
              <h1 className="text-[36px] font-bold my-4 sm:text-[28px]">
                {node.children?.map(renderRichText)}
              </h1>
            );
          case 2:
            return (
              <h2 className="text-[32px] font-bold my-4 sm:text-[24px]">
                {node.children?.map(renderRichText)}
              </h2>
            );
          case 3:
            return (
              <h3 className="text-[27px] font-bold my-4 sm:text-[22px]">
                {node.children?.map(renderRichText)}
              </h3>
            );
          default:
            return (
              <p className="text-[24px] font-medium my-2 sm:text-[18px]">
                {node.children?.map(renderRichText)}
              </p>
            );
        }

      case "paragraph":
        return (
          <p className="text-[24px] font-normal my-2 sm:text-[18px]">
            {node.children?.map(renderRichText)}
          </p>
        );

      case "link":
        return (
          <a
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[24px] font-bold text-blue-600 underline hover:text-blue-800 sm:text-[18px]"
          >
            {node.children?.map(renderRichText)}
          </a>
        );

      case "list":
        return (
          <ul className="list-disc pl-6 my-2 text-[24px] font-bold sm:text-[18px]">
            {node.children?.map(renderRichText)}
          </ul>
        );

      case "list-item":
        return (
          <li className="mb-1 text-[24px] font-bold sm:text-[18px]">
            {node.children?.map(renderRichText)}
          </li>
        );

      case "code":
        return (
          <pre className="bg-gray-100 p-4 rounded text-[20px] font-mono overflow-x-auto">
            <code>{node.children?.map(renderRichText)}</code>
          </pre>
        );

      default:
        return node.children?.map(renderRichText) || null;
    }
  };

  useEffect(() => {
    setLoading(true);
    setError("");
    setCourse(null);

    fetchCourseById(documentId)
      .then((data) => {
        if (data) {
          setCourse(data);
        } else {
          setError("No course found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch course");
        setLoading(false);
      });
  }, [documentId]);

  if (loading) return <p>Loading course...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return null;

  return (
    <div>
      <h1 className="text-[36px] font-bold mb-6 sm:text-[28px]">
        {course.title}
      </h1>
      {Array.isArray(course.description) &&
        course.description.map((node, index) => (
          <div key={index}>{renderRichText(node)}</div>
        ))}
      {course && (
        <CourseTabs
          course={{
            coursePeriod: course.coursePeriod,
            application: course.application,
            costs: course.costs,
            moreInformation: course.moreInformation,
            place: course.place,
          }}
        />
      )}
    </div>
  );
};

export default CourseInfoText;
