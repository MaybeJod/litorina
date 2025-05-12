import type { Course } from "@/interfaces/CourseInterface";
import type { Nav } from "@/interfaces/NavInterface";
import type { News } from "@/interfaces/NewsInterface";
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CourseCard } from "./CourseCard";

interface SectionProps {
  type: "nav" | "course" | "news";
  data: Nav[] | Course[] | News[] | null;
  title?: string;
  buttonText?: string;
}

const IndexSectionLayout: React.FC<SectionProps> = ({
  type,
  data,
  title,
  buttonText,
}) => {
  if (!data || data.length === 0) {
    return <div className="py-8">No {type} items available.</div>;
  }

  const sectionTitle =
    title || (type === "course" ? "Courses" : type === "news" ? "News" : "");

  const sectionLink =
    type === "course" ? "courses" : type === "news" ? "news" : "";

  return (
    <section className="py-8">
      {sectionTitle && (
        <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {type === "course" ? (
              <CourseCard
                title={item.title}
                imageUrl={
                  item.media?.formats?.thumbnail?.url
                    ? `http://litorina.onrender.com${item.media?.formats?.small?.url}`
                    : "https://placehold.co/400"
                }
                documentId={(item as Course).documentId}
              />
            ) : (
              <Card>
                <CardHeader>
                  {type === "nav" && (
                    <CardTitle>
                      <a href={(item as Nav).url} className="hover:underline">
                        {(item as Nav).title}
                      </a>
                    </CardTitle>
                  )}
                  {type === "news" && (
                    <CardTitle>{(item as News).title}</CardTitle>
                  )}
                </CardHeader>
                <CardContent>
                  {type === "news" && (
                    <CardDescription>
                      {(item as News).description[0]?.children
                        .map((child) => child.text)
                        .join("")
                        .substring(0, 100)}
                      ...
                      {(item as News).publishedDate && (
                        <p className="text-muted-foreground text-xs mt-2">
                          Published on: {(item as News).publishedDate}
                        </p>
                      )}
                    </CardDescription>
                  )}
                </CardContent>
              </Card>
            )}
          </React.Fragment>
        ))}
      </div>
      {(type === "course" || type === "news") && data && (
        <div className="mt-6 text-center">
          <Button asChild>
            <Link to={sectionLink}>See All {buttonText || sectionTitle}</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default IndexSectionLayout;
