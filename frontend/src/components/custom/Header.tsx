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
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
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

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavigationMenu>
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
            <NavigationMenuItem className="flex">
             
              <Button
                onClick={toggleLanguage}
                className="text-[var(--text-color-primary)] 
                bg-transparent shadow-none  text-base
                hover:bg-[var(--index-section-background)]
                hover:text-[var(--accent-foreground)] "
              >
                 <Globe className="w-4 h-auto text-[var(--text-color-nav-icon)]" />
                {lang === "English" ? "Svenska" : "English"}
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-auto text-[var(--text-color-nav-icon)]" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-center">Menu</SheetTitle>
            </SheetHeader>
            <nav className="pl-6 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <Link
                    key={item.id}
                    to={item.url}
                    className={
                      isActive
                        ? "block text-[var(--text-color-accent)] font-medium"
                        : "block text-[var(--text-color-primary)]"
                    }
                  >
                    {item.title}
                  </Link>
                );
              })}
              <div className="flex gap-1 items-center">
                <Globe className="w-4 h-auto text-[var(--text-color-nav-icon)]" />
                <button
                  onClick={toggleLanguage}
                  className="text-[var(--text-color-primary)]"
                >
                  {lang === "English" ? "Svenska" : "English"}
                </button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
