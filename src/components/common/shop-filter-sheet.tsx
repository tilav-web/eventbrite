import { Funnel } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import ShopAside from "@/pages/shop/_components/shop-aside";

export default function ShopFilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 border py-3 px-4 cursor-pointer lg:hidden">
          <Funnel size={16} />
          Filter
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="px-6 py-10 overflow-y-scroll">
        <ShopAside />
      </SheetContent>
    </Sheet>
  );
}
