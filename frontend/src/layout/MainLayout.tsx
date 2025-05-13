import Header from "@/components/custom/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/custom/Footer";
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
