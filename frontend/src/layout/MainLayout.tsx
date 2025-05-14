import Header from "@/components/custom/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/custom/Footer";
const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
