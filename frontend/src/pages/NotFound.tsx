import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for could not be found.
        </p>
        <Button asChild className="rounded-full bg-[var(--button-primary)] px-8 py-5">
          <Link to="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;