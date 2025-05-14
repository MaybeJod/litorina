import { useState } from "react";
import type { RichText } from "@/interfaces/RichTextInterface";

interface CourseTabsProps {
  course: {
    coursePeriod?: RichText[];
    application?: RichText[];
    costs?: RichText[];
    moreInformation?: RichText[];
    place?: RichText[];
  };
}

const tabs = [
  { label: "Course Period", key: "coursePeriod" },
  { label: "Application", key: "application" },
  { label: "Costs", key: "costs" },
  { label: "More Information", key: "moreInformation" },
  { label: "Place", key: "place" },
];

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
    case "h1": return <h1>{node.children?.map(renderRichText)}</h1>;
    case "h2": return <h2>{node.children?.map(renderRichText)}</h2>;
    case "h3": return <h3>{node.children?.map(renderRichText)}</h3>;
    case "paragraph": return <p>{node.children?.map(renderRichText)}</p>;
    case "link": return (
      <a href={node.url} target="_blank" rel="noopener noreferrer">
        {node.children?.map(renderRichText)}
      </a>
    );
    case "list": return <ul>{node.children?.map(renderRichText)}</ul>;
    case "list-item": return <li>{node.children?.map(renderRichText)}</li>;
    case "code": return (
      <pre>
        <code>{node.children?.map(renderRichText)}</code>
      </pre>
    );
    default:
      return node.children?.map(renderRichText) || null;
  }
};

const CourseTabs: React.FC<CourseTabsProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState("coursePeriod");

    if (!course) {
    return <p className="mt-4 text-center text-gray-500">No course details available.</p>;
  }

  const tabContent: Record<string, RichText[] | undefined> = {
    coursePeriod: course.coursePeriod,
    application: course.application,
    costs: course.costs,
    moreInformation: course.moreInformation,
    place: course.place,
  };

  return (    
    <div className="mt-8">
      <div className="flex flex-wrap justify-center gap-2 border-2 border-dashed border-purple-300 p-4 rounded-md">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === tab.key
                ? "bg-teal-400 text-white"
                : "bg-teal-100 text-black hover:bg-teal-200"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 bg-white p-4 rounded-md shadow-sm space-y-2">
        {Array.isArray(tabContent[activeTab])
          ? tabContent[activeTab]!.map((node, i) => <div key={i}>{renderRichText(node)}</div>)
          : <p>No content available.</p>}
      </div>
    </div>
  );
};

export default CourseTabs;
