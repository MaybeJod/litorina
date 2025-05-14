import Header from "@/components/custom/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/custom/Footer";
const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="mb-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
