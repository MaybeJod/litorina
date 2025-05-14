import React, { useEffect, useState } from "react";
import fetchCourseBySlug from "@/api/fetchCourse";

interface Node {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  url?: string;
  children?: Node[];
  id?: string;
}

interface Course {
  title: string;
  description: Node[];
}

interface CourseInfoTextProps {
  slug: string;
}

const CourseInfoText: React.FC<CourseInfoTextProps> = ({ slug }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const renderRichText = (node: Node, index: number): React.ReactNode => {
    if (!node) return null;

    const uniqueKey = node.id || `${node.type}-${index}`;

    if (node.type === "text") {
      let content: React.ReactNode = node.text;

      if (node.bold) content = <strong>{content}</strong>;
      if (node.italic) content = <em>{content}</em>;
      if (node.underline) content = <u>{content}</u>;
      if (node.code) content = <code>{content}</code>;

      return <span key={uniqueKey}>{content}</span>;
    }

    switch (node.type) {
      case "heading":
        return (
          <h1
            key={uniqueKey}
            className="text-[36px] font-bold my-4 sm:text-[28px]"
          >
            {node.children?.map((child: Node, childIndex: number) =>
              renderRichText(child, childIndex)
            )}
          </h1>
        );
      case "paragraph":
        return (
          <p
            key={uniqueKey}
            className="text-[24px] font-normal my-2 sm:text-[18px]"
          >
            {node.children?.map((child: Node, childIndex: number) =>
              renderRichText(child, childIndex)
            )}
          </p>
        );
      case "link":
        return (
          <a
            key={uniqueKey}
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[24px] font-bold text-blue-600 underline hover:text-blue-800 sm:text-[18px]"
          >
            {node.children?.map((child: Node, childIndex: number) =>
              renderRichText(child, childIndex)
            )}
          </a>
        );
      case "list":
        return (
          <ul
            key={uniqueKey}
            className="list-disc pl-6 my-2 text-[24px] font-bold sm:text-[18px]"
          >
            {node.children?.map((child: Node, childIndex: number) =>
              renderRichText(child, childIndex)
            )}
          </ul>
        );
      case "list-item":
        return (
          <li
            key={uniqueKey}
            className="mb-1 text-[24px] font-bold sm:text-[18px]"
          >
            {node.children?.map((child: Node, childIndex: number) =>
              renderRichText(child, childIndex)
            )}
          </li>
        );
      case "code":
        return (
          <pre
            key={uniqueKey}
            className="bg-gray-100 p-4 rounded text-[20px] font-mono overflow-x-auto"
          >
            <code>
              {node.children?.map((child: Node, childIndex: number) =>
                renderRichText(child, childIndex)
              )}
            </code>
          </pre>
        );
      default:
        return (
          node.children?.map((child: Node, childIndex: number) =>
            renderRichText(child, childIndex)
          ) || null
        );
    }
  };

  useEffect(() => {
    setLoading(true);
    setError("");
    setCourse(null);

    fetchCourseBySlug(slug)
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
  }, [slug]);

  if (loading) return <p>Loading course...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return null;

  return (
    <div>
      <h1 className="text-[36px] font-bold mb-6 sm:text-[28px]">
        {course.title}
      </h1>
      {Array.isArray(course.description) &&
        course.description.map((node, index) => {
          return (
            <div key={`${node.type}-${index}`}>
              {renderRichText(node, index)}
            </div>
          );
        })}
    </div>
  );
};

export default CourseInfoText;
