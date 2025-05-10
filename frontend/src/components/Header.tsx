import { useEffect, useState } from "react";
import Logo from "./Logo";
import { getNavigationItems } from "@/api/fetchNavigationItems";
import type { NavigationItem } from "@/api/fetchNavigationItems";

const Header = () => {
  const [navItems, setNavItems] = useState<NavigationItem[]>([]);

  useEffect(() => {
    const getNavItems = async () => {
      const navData = await getNavigationItems();
      setNavItems(navData);
    };
    getNavItems();
  }, []);

  return (
    <>
      <nav className="flex ">
        <Logo />
        <ul className="flex gap-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className="text-lg font-medium">
                {item.title}
              </a>
            </li>
          ))}
          <li className="text-lg font-medium">SV</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
