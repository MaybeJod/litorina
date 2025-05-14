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
import CardGridContainer from "./CardGridContainer";
import CourseCard from "./CourseCard";
import IndexNavigationCard from "./IndexNavigationCard";

interface SectionProps {
  type: "nav" | "course" | "news";
  data: Nav[] | Course[] | News[] | null;
  backgroundColor?: boolean;
  title?: string;
  buttonText?: string;
}

const IndexSectionLayout: React.FC<SectionProps> = ({
  type,
  data,
  backgroundColor,
  title,
  buttonText,
}) => {
  const sectionTitle =
    title || (type === "course" ? "Courses" : type === "news" ? "News" : "");

  const sectionLink =
    type === "course" ? "courses" : type === "news" ? "news" : "";

  if (!data || data.length === 0) {
    return (
      <section
        className={`${
          backgroundColor ? "bg-[var(--index-section-background)]" : ""
        } py-8`}
      >
        <h2 className="text-center text-2xl font-bold mb-8">{sectionTitle}</h2>
        <p className="container mx-auto">No {type} items available.</p>
      </section>
    );
  }

  return (
    <section
      className={`${
        backgroundColor ? "bg-[var(--index-section-background)]" : ""
      } py-8`}
    >
      <h2 className="text-center text-2xl font-bold mb-8">{sectionTitle}</h2>
      <CardGridContainer>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {type === "nav" && (
              <IndexNavigationCard
                title={item.title}
                url={(item as Nav).url}
                media={item.media}
              />
            )}
            {type === "course" && (
              <CourseCard
                documentId={(item as Course).documentId}
                title={item.title}
                media={item.media}
                slug={item.slug}
              />
            )}
            {type === "news" && (
              <Card>
                <CardHeader>
                  <CardTitle>{(item as News).title}</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            )}
          </React.Fragment>
        ))}
      </CardGridContainer>
      {buttonText && data && (
        <div className="mt-6 text-center">
          <Button className="rounded-full bg-[var(--button-primary)]" asChild>
            <Link to={sectionLink}>See All {buttonText || sectionTitle}</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default IndexSectionLayout;
