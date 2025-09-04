import { Button } from "@/components/ui/button";
import { mainImage1, mainImage2, productImage } from "@/utils/images";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { featuresMenu } from "../utils/features-menu";

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);

  const images = [mainImage1, mainImage2];

  // Avtomatik slayd
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="mt-4 mb-8">
      <div className="flex gap-2 mb-4 md:items-stretch px-4 flex-col md:h-auto md:flex-row">
        <div className="bg-white max-w-[245px] w-full h-full shadow-xl lg:flex flex-col gap-6 p-6 hidden">
          <Button className="bg-[#fa5770] rounded-none hover:bg-[#fa5770]/80 text-white font-bold">
            TOP CATEGORIES
          </Button>
          <ul className="flex flex-col">
            <li className="border-b py-2">
              <Link to={"/"}>Electronics</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Fashion</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Jewelry & Accessories</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Home & Garden</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Sports & Entertainment</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Mother & Kids</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Beauty & Health</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Toys & Games</Link>
            </li>
            <li className="border-b py-2">
              <Link to={"/"}>Collectibles & Art</Link>
            </li>
          </ul>
        </div>
        <div className="gb-green-500 flex-1 shadow-xl/20 overflow-hidden relative">
          {/* Slaydlar */}
          <div className="h-[320px] sm:h-[500px] md:h-[500px] lg:h-full w-full relative">
            <AnimatePresence>
              <motion.img
                key={current}
                src={images[current]}
                alt="slide"
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          {/* Indicator tugmalar */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-red-400 scale-125" : "bg-red-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="md:max-w-[230px] w-full flex flex-col items-stretch gap-4">
          <div className="flex-1 shadow-xl/10 relative">
            <div className="w-full h-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={productImage}
                alt="laptop image"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-center pt-6 p-4">
              <p className="text-[#fa5770] font-bold uppercase text-sm mb-3">
                Cell Phones
              </p>
              <p className="font-bold text-lg mb-5">
                Trade in and Save, Limited Edition
              </p>
              <Link
                className="text-xs underline hover:text-[#fa5770] transition-all"
                to={"/"}
              >
                SHOW NOW
              </Link>
            </div>
          </div>
          <div className="flex-1 shadow-xl/10 relative">
            <div className="w-full h-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={productImage}
                alt="laptop image"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-center pt-6 p-4">
              <p className="text-[#fa5770] font-bold uppercase text-sm mb-3">
                Cell Phones
              </p>
              <p className="font-bold text-lg mb-5">
                Trade in and Save, Limited Edition
              </p>
              <Link
                className="text-xs underline hover:text-[#fa5770] transition-all"
                to={"/"}
              >
                SHOW NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-stretch shadow-xl/10 px-8 pt-10 pb-8 border flex-wrap gap-10 mx-4">
        {featuresMenu.map((item, index) => {
          return (
            <div
              key={`${item.title}${index}`}
              className="flex items-center gap-2 flex-col md:flex-row md:flex-1 w-full"
            >
              <item.icon size={44} />
              <div className="flex flex-col md:border-r border-b md:border-b-0 md:pr-4 md:mr-4 mb-4  pb-4 md:mb-0  md:pb-0 w-full text-center md:text-start">
                <p className="text-md font-bold">{item.title}</p>
                <p className="text-md text-black/50">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
