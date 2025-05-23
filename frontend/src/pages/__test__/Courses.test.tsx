import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import type { Mock } from "vitest";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'; 
import Courses from "../Courses";

vi.mock("../../api/fetchCategories", () => ({
  fetchCategories: vi.fn(),
  fetchCoursesByCategory: vi.fn(),
}));

vi.mock("../../api/fetchCourses", () => ({
  __esModule: true,
  default: vi.fn(),
}));

import { fetchCategories, fetchCoursesByCategory } from "../../api/fetchCategories";
import fetchCourses from "../../api/fetchCourses";

const mockCategories = [
  { id: 1, slug: "frontend", title: "Frontend" },
  { id: 2, slug: "backend", title: "Backend" },
];

const mockAllCourses = [
  { id: 1, title: "Intro to Web", documentId: "abc1", media: null },
  { id: 2, title: "React Basics", documentId: "abc2", media: null },
];

const mockFrontendCourses = [
  { id: 3, title: "Advanced React", documentId: "abc3", media: null },
];

describe("Courses Page", () => {
  it("filters courses by category", async () => {
    (fetchCategories as Mock).mockResolvedValue(mockCategories);
    (fetchCourses as Mock).mockResolvedValue(mockAllCourses);
    (fetchCoursesByCategory as Mock).mockResolvedValue(mockFrontendCourses);

    render(
      <BrowserRouter> 
        <Courses />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Intro to Web")).toBeInTheDocument();
      expect(screen.getByText("React Basics")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Frontend"));

    await waitFor(() => {
      expect(screen.getByText("Advanced React")).toBeInTheDocument();
    });

    expect(screen.queryByText("Intro to Web")).not.toBeInTheDocument();
    expect(screen.queryByText("React Basics")).not.toBeInTheDocument();
  });
});