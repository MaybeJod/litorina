// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DynamicRouter from "./router/DynamicRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DynamicRouter />
  </StrictMode>
);