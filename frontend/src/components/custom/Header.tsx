import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "@/components/custom/Logo";
import { getNavigationItems } from "@/api/fetchNavigationItems";
import type { NavigationItem } from "@/interfaces/NavitemsInreface";
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
    <header className="container mx-auto py-8 flex justify-between items-center">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.url}
                    className={
                      isActive ? "text-gray-900 font-medium" : "text-gray-500"
                    }
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="flex gap-2">
            <Globe className="w-6 h-auto" />
            <button onClick={toggleLanguage}>
              {lang === "English" ? "Svenska" : "English"}
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
