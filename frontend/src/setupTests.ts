import "@testing-library/jest-dom";
import { vi } from "vitest"; 

global.matchMedia =
  global.matchMedia ||
  function (query: string) {
    return {
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  };