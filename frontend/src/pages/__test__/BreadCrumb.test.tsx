import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Breadcrumbs from "@/components/custom/Breadcrumbs";

const renderWithRouter = (initialPath: string) => {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="*" element={<Breadcrumbs />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("Breadcrumbs component", () => {
  it("renders Home on root path", () => {
    renderWithRouter("/");
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.queryByText("›")).not.toBeInTheDocument();
  });

  it("renders full breadcrumb path", () => {
    renderWithRouter("/products/shoes/nike-air");
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Shoes")).toBeInTheDocument();
    expect(screen.getByText("Nike Air")).toBeInTheDocument();
  });
});
