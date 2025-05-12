const API_BASE = "https://litorina.onrender.com/api";

export const fetchCategories = async () => {
  const res = await fetch(`${API_BASE}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data = await res.json();
  return data.data;
};

export const fetchCoursesByCategory = async (slug: string) => {
  const url = `${API_BASE}/courses?filters[category][slug][$eq]=${slug}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch courses");
  const data = await res.json();
  return data.data;
};
