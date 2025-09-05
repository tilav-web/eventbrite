import PageTitle from "@/components/common/page-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { payPalImage, watchImage } from "@/utils/images";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <PageTitle title="Cart" />
      <div className="flex md:items-stretch flex-col md:flex-row gap-y-12 max-w-[1200px] mx-auto pt-10 gap-x-4 px-4">
        <div className="flex-1">
          <div className="flex items-center justify-between pb-3 border-b uppercase text-sm">
            <p className="text-[10.5px] font-bold">Product</p>
            <p className="pr-4 text-[10.5px] font-bold">Total</p>
          </div>
          <div className="">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-start gap-4 py-8 border-b">
                <div className="w-[84px] h-[112px]">
                  <img
                    className="w-full h-full object-cover"
                    src={watchImage}
                    alt="soat"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start flex-1">
                  <div className="flex items-center justify-between w-full">
                    <h5>11-inch Tablet Pro 2020 Space Gray</h5>
                    <p>$449.00</p>
                  </div>
                  <p>$529.00D $449.00</p>
                  <p className="p-1 rounded border border-black text-[10.5px] uppercase font-bold">
                    Save $80.00
                  </p>
                  <p className="text-[10.5px] max-w-[400px]">
                    Qui, explicabo eius nisi fugit repudiandae, quos voluptates,
                    beatae ullam consectetur ducimus itaque! Tempore provident…
                  </p>
                  <div className="flex items-center justify-between gap-2 border border-gray-300 rounded p-2 w-[110px] h-[32px]">
                    <button className="cursor-pointer">
                      <FiMinus size={12} />
                    </button>
                    <span>{0}</span>
                    <button className="cursor-pointer">
                      <FiPlus size={12} />
                    </button>
                  </div>
                  <button className="text-[10.5px] underline cursor-pointer">
                    Remove item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 md:max-w-[410px] relative mb-8">
          <div className="w-full sticky top-5">
            <p className="uppercase text-[10.5px] font-bold pb-4 border-b">
              Cart totals
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base border-b pb-5 cursor-pointer px-4">
                  Add a coupon
                </AccordionTrigger>
                <AccordionContent className="flex items-center gap-2 border-b pb-5 px-4">
                  <Input
                    className="h-[44px] rounded border-black focus-visible:ring-0"
                    placeholder="Enter code"
                  />
                  <Button className="border-black border h-[44px] rounded-none w-[110px] bg-[#efefef] hover:bg-[#efefef] cursor-pointer text-base text-black">
                    Apply
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-4 pt-6 mb-3 px-4">
              <div className="flex items-center justify-between text-base">
                <p>Subtotal</p>
                <p>$4,395.00</p>
              </div>
              <div className="">
                <div className="flex items-center justify-between text-base mb-1">
                  <p className="text-base">Delivery</p>
                  <span>$5.00</span>
                </div>
                <p className="text-[11px]">Flat rate</p>
              </div>
            </div>
            <Accordion type="single" collapsible className="pb-6 px-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="cursor-pointer">
                  <p className="flex items-center gap-1">
                    <span>Delivers to</span>
                    <span className="uppercase font-bold">
                      Maharashtra, India
                    </span>
                  </p>
                </AccordionTrigger>
                <AccordionContent className="flex items-center gap-2">
                  <Input
                    className="h-[44px] rounded border-black focus-visible:ring-0"
                    placeholder="Enter code"
                  />
                  <Button className="border-black border h-[44px] rounded-none w-[110px] bg-[#efefef] hover:bg-[#efefef] cursor-pointer text-base text-black">
                    Apply
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="border-b pb-6 px-4">
              <div className="flex items-center gap-2 mb-4">
                <input
                  name="radio"
                  type="radio"
                  className="w-6 h-6 accent-black"
                />
                <div>
                  <p className="text-sm">Flat rate</p>
                  <span className="text-[10px]">$5.00</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <input
                  name="radio"
                  type="radio"
                  className="w-6 h-6 accent-black"
                />
                <div className="flex flex-col">
                  <p className="text-sm">Free shipping</p>
                  <span className="uppercase text-[10px]">Free</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-base">
                <p>GST 18%</p>
                <p>$647.46</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-6 px-4 mb-6">
              <div className="flex items-center justify-between text-xl font-bold pt-6 px-4 mb-4">
                <p>Total</p>
                <p>$5,047.46</p>
              </div>
              <Button className="rounded bg-yellow-400 h-[40px] cursor-pointer hover:bg-yellow-400/90">
                <img className="w-18" src={payPalImage} alt="paypal icon" />
              </Button>
            </div>
            <div className="flex items-center px-12 mb-4">
              <span className="flex-1 h-[1px] bg-gray-300"></span>
              <p className="px-4 text-sm">OR</p>
              <span className="flex-1 h-[1px] bg-gray-300"></span>
            </div>
            <Link className="block text-center py-2 border-2 border-white active:border-blue-700 transition-all" to={"/cart"}>Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
