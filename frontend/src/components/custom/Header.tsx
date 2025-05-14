import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "@/components/custom/Logo";
import { getNavigationItems } from "@/api/fetchNavigationItems";
import type { NavigationItem } from "@/interfaces/NavitemsInterface";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Globe } from "lucide-react";

const Header = () => {
  const [navItems, setNavItems] = useState<NavigationItem[]>([]);
  const [lang, setLang] = useState("English");
  const location = useLocation();

  useEffect(() => {
    const getNavItems = async () => {
      const navData = await getNavigationItems();
      setNavItems(navData);
    };
    getNavItems();
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "English" ? "Svenska" : "English"));
  };

  return (
    <header className="container mx-auto py-8 flex justify-between items-center text-base">
      <Logo />
      <NavigationMenu >
        <NavigationMenuList className="flex lg:gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.url}
                    className={
                      isActive
                        ? " text-[var(--text-color-accent)] font-medium"
                        : "text-[var(--text-color-primary)]"
                    }
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="flex gap-2">
            <Globe className="w-6 h-auto text-[var(--text-color-globe-icon)]" />
            <button onClick={toggleLanguage} className="text-[var(--text-color-primary)]">
              {lang === "English" ? "Svenska" : "English"}
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
