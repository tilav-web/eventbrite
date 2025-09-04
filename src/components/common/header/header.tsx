import { icon } from "@/utils/images";
import { Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { menu } from "./menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ShoppingSheet from "../shopping-sheet";
import SearchDialog from "../search-dialog";
import HeaderMenuSheet from "../header-menu-sheet";
import NotificationBadge from "../notification-badge";

export default function Header() {
  return (
    <header className="w-full p-6 bg-white shadow">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <div className="lg:hidden">
          <HeaderMenuSheet />
        </div>
        <Link to="/">
          <img src={icon} alt="icon" className="max-w-[150px] w-full" />
        </Link>
        <nav className="flex items-center gap-7">
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {menu.map((item, index) => (
                <NavigationMenuItem className="mr-5" key={`${item.title}${index}`}>
                  {item.content && item.content.length > 0 ? (
                    <NavigationMenuTrigger>
                      {item.target ? (
                        <Link
                          to={item.target}
                          className="hover:text-red-400"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <>{item.title}</>
                      )}
                    </NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuLink
                      className="hover:text-red-400"
                      href={item.target}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                  <NavigationMenuContent>
                    {item.content &&
                      item.content.length > 0 &&
                      item.content.map((subItem, subIndex) => (
                        <NavigationMenuLink
                          key={`${subItem.title}${subIndex}`}
                          href={subItem.target}
                          className="w-[200px]"
                        >
                          {subItem.title}
                        </NavigationMenuLink>
                      ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ul className="flex items-center gap-4 text-black">
            <li className="hidden lg:block">
              <SearchDialog />
            </li>
            <li className="relative">
              <Link to={"/wishlist"}>
                <Heart />
              </Link>
              <NotificationBadge
                count={3}
                className="absolute top-[-10px] right-[-10px]"
              />
            </li>
            <li className="hidden lg:block">
              <Popover>
                <PopoverTrigger>
                  <User />
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-2">
                    <Link to="/login" className="">
                      Login
                    </Link>
                    <Link to="/register" className="">
                      Register
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </li>
            <li className="relative">
              <ShoppingSheet />
              <NotificationBadge
                count={2}
                className="absolute top-[-10px] right-[-10px]"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
