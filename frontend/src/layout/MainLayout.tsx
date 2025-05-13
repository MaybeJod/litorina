import Header from "@/components/custom/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* footer component */}
    </>
  );
};

export default MainLayout;
