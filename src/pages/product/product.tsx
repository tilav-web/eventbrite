import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ipatImage,
  laptopImage,
  teamManImage,
  watchImage,
  womenImage,
} from "@/utils/images";
import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { MdStarBorder } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/common/product-card";

export default function Product() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [starChecked, setStarChecked] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<number>(0);


  const handleImage = (index: number) => {
    setActiveImage(index);
  }

  const images = [womenImage, ipatImage, laptopImage, teamManImage, watchImage];

  const handleMove = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    let clientX: number;
    let clientY: number;

    if ("touches" in e) {
      // Handle togetBoundingClientRectuch events
      if (e.touches.length === 0) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      // Handle mouse events
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = ((clientX - left) / width) * 100; // Cursor/touch x position in percentage
    const y = ((clientY - top) / height) * 100; // Cursor/touch y position in percentage

    imageRef.current.style.transformOrigin = `${x}% ${y}%`; // Set transform origin
  };

  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto p-4 pt-8">
        <div className="flex items-center justify-between mb-8">
          <p className="hidden lg:block">
            Home / Electronics / 11-inch Tablet Pro 2020 Space Gray
          </p>
          <div className="flex items-center gap-4 w-full justify-between lg:max-w-[200px] max-w-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="uppercase flex items-center gap-1 cursor-pointer hover:text-rose-400 transition-all">
                  <IoIosArrowDropleft size={18} /> Previous
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Lorem ipsum dolor sit.
              </TooltipContent>
            </Tooltip>
            <span className="hidden lg:block">|</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="uppercase flex items-center gap-1 cursor-pointer hover:text-rose-400 transition-all">
                  Next <IoIosArrowDropright size={18} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Lorem ipsum dolor sit.
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-8 p-4 mb-10 flex-col lg:flex-row">
          <div className="flex items-start gap-3 flex-col-reverse md:flex-row">
            <div className="flex flex-row md:flex-col gap-2">
              {images.map((img, index) => {
                return (
                  <button
                    key={index}
                    className={`w-[70px] h-[70px] md:w-[50px] md:h-[50px] overflow-hidden bg-white cursor-pointer ${index === activeImage ? 'ring-1 ring-offset-1 ring-black' : ''}`}
                    onClick={() => handleImage(index)}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt="soat rasmi"
                    />
                  </button>
                );
              })}
            </div>
            <div
              className="lg:w-[500px] lg:h-[500px] w-full md:h-[600px] bg-gray-200 group overflow-hidden cursor-pointer"
              onMouseMove={handleMove} // Kursor harakatini kuzatish
            >
              <img
                ref={imageRef}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.8]" // Scale qiymati 1.3
                src={images[activeImage]}
                alt="soat rasmi"
              />
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h3 className="text-[24px] flex flex-col gap-2 mb-10">
                <span>Apple Watch Series 5 GPS, 40mm Gold</span>
                <span>$499.00.$349.00</span>
              </h3>
              <p className="line-clamp-6 mb-10">
                Qui, explicabo eius nisi fugit repudiandae, quos voluptates,
                beatae ullam consectetur ducimus itaque! Tempore provident
                eligendi sed ipsum ea. Reiciendis nulla neque sapiente, totam
                veritatis non? Odio, quaerat.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 my-4">
                <div className="flex items-center justify-between gap-2 border border-gray-300 rounded-full px-4 py-2 w-[170px] h-[50px]">
                  <button className="cursor-pointer">
                    <FiMinus size={18} />
                  </button>
                  <span>1</span>
                  <button className="cursor-pointer">
                    <FiPlus size={18} />
                  </button>
                </div>
                <Button className="bg-[#5817ad] w-[150px] text-xs uppercase font-bold rounded-full sm:w-[200px] h-[50px] cursor-pointer">
                  Add to card
                </Button>
              </div>
              <button className="cursor-pointer">
                <CiHeart size={20} />
              </button>
            </div>
            <p>Category: Electronics</p>
          </div>
        </div>
        <div className="flex items-start justify-center pt-8 mb-18">
          <Tabs defaultValue="description" className="max-w-[770px] w-full">
            <TabsList className="flex md:items-center justify-around flex-col md:flex-row gap-4 items-start">
              <TabsTrigger
                value="description"
                className="text-xl border md:border-none px-2 py-1 md:px-0 md:py-0"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="additional"
                className="text-xl border md:border-none px-2 py-1 md:px-0 md:py-0"
              >
                Additional Information
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="text-xl border md:border-none px-2 py-1 md:px-0 md:py-0"
              >
                Reviews (2)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </TabsContent>
            <TabsContent value="additional" className="mt-4">
              table
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="mb-10">There are no reviews yet.</div>
              <div>
                <p className="mb-1">
                  Your email address will not be published. Required fields are
                  marked <span className="text-red-500">*</span>
                </p>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col mb-2">
                    <p className="mb-1">
                      Your rating <span className="text-red-500">*</span>
                    </p>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Label key={index} className="relative">
                          <input
                            key={index}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setStarChecked((prev) =>
                                  prev === index + 1 ? 0 : index + 1
                                );
                              } else {
                                setStarChecked(0);
                              }
                            }}
                            className="absolute w-full h-full opacity-0"
                            type="checkbox"
                            checked={starChecked < index + 1 ? false : false}
                          />
                          {starChecked >= index + 1 ? (
                            <IoMdStar
                              size={24}
                              className="cursor-pointer text-yellow-400"
                            />
                          ) : (
                            <MdStarBorder
                              size={24}
                              className="cursor-pointer"
                            />
                          )}
                        </Label>
                      ))}
                    </div>
                  </div>
                  <Label className="flex flex-col items-start">
                    <p>
                      Your review <span className="text-red-500">*</span>
                    </p>
                    <Textarea className="rounded-none bg-[#f7f5f0] px-3 py-6 h-[250px]" />
                  </Label>
                  <Label className="flex flex-col items-start">
                    <p>
                      Name <span className="text-red-500">*</span>
                    </p>
                    <Input className="rounded-none bg-[#f7f5f0] px-3 py-6" />
                  </Label>
                  <Label className="flex flex-col items-start">
                    <p>
                      Email <span className="text-red-500">*</span>
                    </p>
                    <Input className="rounded-none bg-[#f7f5f0] px-3 py-6" />
                  </Label>
                  <div className="">
                    <Label className="flex items-center mb-6">
                      <input type="checkbox" />
                      <p>
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </p>
                    </Label>
                    <Button className="bg-[#5817ad] rounded-full w-[130px] h-[50px] text-base uppercase font-bold">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="border-t border-gray-300 pt-12 mb-18">
          <h3 className="text-xl mb-8 text-center">Related products</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 3 }, (_, index) => index + 1).map((item) => (
              <div key={item} className="w-full max-w-[300px] mx-auto">
                <ProductCard width="w-full" height="md:h-[350px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
