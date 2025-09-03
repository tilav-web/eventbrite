import { ShoppingBag, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

export default function ShoppingSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="">
          <SheetTitle className="border-b py-6 font-extralight font-mono text-base flex items-center gap-2">
            <p>SHOPPING CART</p>
            <p className="h-4 w-4 text-sm rounded-full bg-rose-400 text-white flex items-center justify-center">
              <span>0</span>
            </p>
          </SheetTitle>
        </SheetHeader>
        <div className="flex items-center justify-center pt-18">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-8">
              <div className="h-20 w-20 rounded-full flex items-center justify-center bg-black/5 mb-6">
                <ShoppingCart size={32} />
              </div>
              <p>No products in the cart.</p>
            </div>
            <Button className="bg-[#5817ad] border-none">Continue Shopping</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
