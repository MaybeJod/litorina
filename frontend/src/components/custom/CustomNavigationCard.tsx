import { Card as ShadCard } from "@/components/ui/card"; // shadcn/ui
import type { ReactNode } from "react";
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <ShadCard className={`relative rounded-sm overflow-hidden ${className}`}>{children}</ShadCard>;
}
function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${className}`}>{children}</div>;
}
function CardFooter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
function CardTitle({
  children,
  className = "",
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <h3 className={`truncate ${className}`} title={title}>
      {children}
    </h3>
  );
}
export { Card, CardHeader, CardFooter, CardTitle };