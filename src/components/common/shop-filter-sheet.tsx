import { Funnel } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function ShopFilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 border py-3 px-4 cursor-pointer lg:hidden">
          <Funnel size={16} />
          Filter
        </button>
      </SheetTrigger>
      <SheetContent side='left'>Lorem, ipsum dolor.</SheetContent>
    </Sheet>
  );
}
