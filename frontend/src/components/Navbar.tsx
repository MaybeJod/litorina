// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNavigationItems, type NavigationItem } from "../api/fetchNavigationItems.ts";

export const Navbar: React.FC = () => {
  const [navItems, setNavItems] = useState<NavigationItem[]>([]);

  useEffect(() => {
    getNavigationItems().then(setNavItems);
  }, []);

  return (
    <nav className="flex gap-4 p-4 bg-gray-100 justify-end">
      {navItems.map((item) => (
        <Link key={item.url} to={item.url} className="text-sm hover:underline">
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
