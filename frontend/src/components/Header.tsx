import { useEffect, useState } from "react";
import Logo from "./Logo";
import { getNavigationItems } from "@/api/fetchNavigationItems";
import type { NavigationItem } from "@/api/fetchNavigationItems";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
    <header className="flex justify-between items-center">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink href={item.url}>
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuLink href="#sv">SV</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
