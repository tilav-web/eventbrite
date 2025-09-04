import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { menu } from "./header/menu";
import { Link } from "react-router-dom";

// openMenus uchun TypeScript tipi
interface OpenMenus {
  [key: number]: boolean;
}

export default function HeaderMenuSheet() {
  const [openMenus, setOpenMenus] = useState<OpenMenus>({});

  const toggleMenu = (index: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Label className="flex items-center bg-[#ededeb] rounded-md px-3 py-2 gap-2 mb-8">
              <Input
                className="border-none shadow-none focus-visible:ring-0 text-[#364466] placeholder:text-[#364466]"
                placeholder="Search..."
              />
              <Search />
            </Label>
          </SheetTitle>
        </SheetHeader>
        <ul className="border-t">
          {menu.map((item, index) => {
            const isOpen = openMenus[index];
            return (
              <li
                key={item.title + index}
                className={`border-b ${
                  isOpen ? "h-auto" : "h-16"
                } transition-all duration-300`}
              >
                <div className="flex items-center justify-between h-16">
                  <Link
                    to={item.target}
                    className="pl-4 text-[#364466] font-medium hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                  {item.content && item.content.length > 0 && (
                    <button
                      className="border-l h-full cursor-pointer w-16 flex items-center justify-center"
                      onClick={() => toggleMenu(index)}
                    >
                      {isOpen ? (
                        <ChevronDown size={18} className="text-[#364466]" />
                      ) : (
                        <ChevronUp size={18} className="text-[#364466]" />
                      )}
                    </button>
                  )}
                </div>
                {item.content && item.content.length > 0 && isOpen && (
                  <ul className="bg-gray-50 pl-6 pt-2 pb-4">
                    {item.content.map((subItem, i) => {
                      return (
                        <li key={subItem.title + i + "a"} className="py-1">
                          <Link
                            to={subItem.target}
                            className="text-sm text-[#364466] hover:text-blue-600 transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
