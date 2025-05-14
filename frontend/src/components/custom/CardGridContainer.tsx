import React, { type ReactNode } from "react";

interface CardGridContainerProps {
  children: ReactNode;
}

const CardGridContainer: React.FC<CardGridContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto min-[400px]:grid gap-4 min-[400px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-[1050px]:px-4">
      {children}
    </div>
  );
};

export default CardGridContainer;
