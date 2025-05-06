import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Course {
  id: string | number;
  title: string;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  // const url = "https://litorina.onrender.com/api/courses";
  const url = "https://litorina.onrender.com/api/categories";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data["data"]);
      setCourses(data["data"]);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      {courses.map((course) => (
        <div key={course.id} className="title">
          {course.title}
        </div>
      ))}
      <Button>Click me</Button>
    </div>
  );
}

export default App;
