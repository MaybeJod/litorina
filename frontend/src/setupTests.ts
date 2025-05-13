import "@testing-library/jest-dom";
import { vi } from "vitest"; // Import `vi` from Vitest

global.matchMedia =
  global.matchMedia ||
  function (query: string) {
    return {
      matches: false,
      media: query,
      addEventListener: vi.fn(),  // Add the mock for `addEventListener`
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  };