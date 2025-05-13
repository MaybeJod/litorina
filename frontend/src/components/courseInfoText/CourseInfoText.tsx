import React, { useEffect, useState } from "react";
import fetchCourseById from "@/api/fetchCourse";

interface Course {
  title: string;
  description: any[]; 
}

interface CourseInfoTextProps {
  documentId: string;
}

const CourseInfoText: React.FC<CourseInfoTextProps> = ({ documentId }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const renderRichText = (node: any): React.ReactNode => {
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
      case "h1":
        return <h1>{node.children?.map(renderRichText)}</h1>;
      case "h2":
        return <h2>{node.children?.map(renderRichText)}</h2>;
      case "h3":
        return <h3>{node.children?.map(renderRichText)}</h3>;
      case "paragraph":
        return <p>{node.children?.map(renderRichText)}</p>;
      case "link":
        return (
          <a href={node.url} target="_blank" rel="noopener noreferrer">
            {node.children?.map(renderRichText)}
          </a>
        );
      case "list":
        return <ul>{node.children?.map(renderRichText)}</ul>;
      case "list-item":
        return <li>{node.children?.map(renderRichText)}</li>;
      case "code":
        return (
          <pre>
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
      <h1>{course.title}</h1>
      {Array.isArray(course.description) &&
        course.description.map((node, index) => (
          <div key={index}>{renderRichText(node)}</div>
        ))}
    </div>
  );
};

export default CourseInfoText;

