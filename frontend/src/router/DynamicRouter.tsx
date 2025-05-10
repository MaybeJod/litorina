import { useEffect, useState, type JSX } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Courses from "../pages/Courses";
import { getNavigationItems } from "../api/fetchNavigationItems";

const DynamicRouter = () => {
  const [routes, setRoutes] = useState<{ path: string; element: JSX.Element }[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const navigationItems = await getNavigationItems();
      

      const componentMap: Record<string, JSX.Element> = {
        "/courses": <Courses />,
        "/events": <div>Events</div>,
        "/rent": <div>Rent our space</div>,
        "/contact": <div>Contact</div>,
      };

      const dynamicRoutes = navigationItems.map((item) => ({
        path: item.url,
        element: componentMap[item.url] || <div>{item.title}</div>,
      }));

      setRoutes([
        { path: "/", element: <App /> },
        ...dynamicRoutes,
        { path: "*", element: <div>404 - Page Not Found</div> },
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