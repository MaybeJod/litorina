import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/courses",
    element: <div>About</div>,
  },
  {
    path: "/events",
    element: <div>Events</div>,
  },
  {
    path: "/rent",
    element: <div>Rent our space</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    <App />
  </StrictMode>
);
