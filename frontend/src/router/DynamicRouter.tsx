import { useEffect, useState, type JSX } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import fetchNavigationItems from "@/api/fetchNavigationItems";
import Course from "@/pages/Course";
import MainLayout from "@/layout/MainLayout";
import Courses from "../pages/Courses";
import Events from "../pages/Events";
import Index from "../pages/Index";
import PlaceHolderPage from "@/components/custom/PlaceHolderPage";
import NotFound from "@/pages/NotFound";


const DynamicRouter = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const navigationItems = await fetchNavigationItems();

      const componentMap: Record<string, JSX.Element> = {
        "/courses": <Courses />,
        "/events": <div>Events</div>,
        "/rent": <PlaceHolderPage />,
        "/contact": <PlaceHolderPage />,
        "/events": <Events />,
        "/rent": <div>Rent our space</div>,
        "/contact": <div>Contact</div>,
      };

      const dynamicRoutes = navigationItems.map((item) => ({
        path: item.url,
        element: componentMap[item.url] || <div>{item.title}</div>,
      }));

      dynamicRoutes.push({
        path: "/courses/:documentId",
        element: <Course />,
      });

      setRoutes([
        {
          path: "/",
          element: <MainLayout />,
          children: [{ path: "/", element: <Index /> }, ...dynamicRoutes],
        },
        { path: "*", element: <NotFound /> },
      ]);
    };

    fetchRoutes();
  }, []);

  if (routes.length === 0) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default DynamicRouter;
