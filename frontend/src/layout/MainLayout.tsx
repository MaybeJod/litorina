import Header from "@/components/custom/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
