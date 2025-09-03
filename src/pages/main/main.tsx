import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { featuresMenu } from "./utils/features-menu";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { mainImage1, mainImage2, nikeImage, womenImage } from "@/utils/images";
import ProductCard from "@/components/common/product-card";

export default function Main() {
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
    <div className="max-w-[1200px] w-full mx-auto">
      <section className="mt-4 mb-8">
        <div className="flex gap-2 mb-4 md:items-stretch px-4 flex-col md:flex-row">
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
          <div className="gb-green-500 flex-1 shadow-xl/20 overflow-hidden relative h-[550px] lg:h-auto">
            {/* Slaydlar */}
            <AnimatePresence>
              <motion.img
                key={current}
                src={images[current]}
                alt="slide"
                className="absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

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
            <div className="flex-1 shadow-xl/10"></div>
            <div className="flex-1 shadow-xl/10"></div>
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
      <section className="flex flex-col md:flex-row items-stretch mb-16 justify-between gap-8 mx-4">
        <div className="relative flex-1 max-h-[350px] max-w-auto w-full md:max-h-[400px] lg:max-w-[360px] md:max-w-[305px] overflow-hidden lg:max-h-[500px]">
          <img
            className="absolue w-full h-full top-0 right-0 object-cover"
            src={nikeImage}
            alt="nike image"
          />
          <div className="absolute bottom-0 p-8">
            <div>
              <div className="flex items-center gap-3 dancing-font text-4xl font-bold mb-2">
                <p>#All</p>
                <p className="text-[#fa5770] hover:text-black transition-all">
                  Accessories
                </p>
              </div>
              <p className="mb-2 text-md text-black/60 font-sans">
                Sale 40% Off Almost Everything
              </p>
            </div>
            <Button className="rounded-none my-3">DISCOVER MORE</Button>
          </div>
        </div>
        <div className="relative flex-1 max-h-[350px] max-w-auto w-full md:max-h-[400px] lg:max-w-[360px] md:max-w-[305px] overflow-hidden lg:max-h-[500px]">
          <img
            className="absolue w-full h-full top-0 right-0 object-cover"
            src={nikeImage}
            alt="nike image"
          />
          <div className="absolute bottom-0 p-8">
            <div>
              <div className="flex items-center gap-3 dancing-font text-4xl font-bold mb-2">
                <p>#All</p>
                <p className="text-[#fa5770] hover:text-black transition-all">
                  Accessories
                </p>
              </div>
              <p className="mb-2 text-md text-black/60 font-sans">
                Sale 40% Off Almost Everything
              </p>
            </div>
            <Button className="rounded-none my-3">DISCOVER MORE</Button>
          </div>
        </div>
        <div className="relative flex-1 max-h-[350px] max-w-auto w-full md:max-h-[400px] lg:max-w-[360px] md:max-w-[305px] overflow-hidden lg:max-h-[500px]">
          <img
            className="absolue w-full h-full top-0 right-0 object-cover"
            src={nikeImage}
            alt="nike image"
          />
          <div className="absolute bottom-0 p-8">
            <div>
              <div className="flex items-center gap-3 dancing-font text-4xl font-bold mb-2">
                <p>#All</p>
                <p className="text-[#fa5770] hover:text-black transition-all">
                  Accessories
                </p>
              </div>
              <p className="mb-2 text-md text-black/60 font-sans">
                Sale 40% Off Almost Everything
              </p>
            </div>
            <Button className="rounded-none my-3">DISCOVER MORE</Button>
          </div>
        </div>
      </section>
      <section className="mb-24 mx-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-[#fa6b81] text-mono">POPULAR PRODUCTS</p>
          <h3 className="dancing-font text-4xl font-extrabold my-4">
            Our Best Product
          </h3>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <p className="w-24 h-1 bg-[#984fff] rounded-full"></p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((item) => (
            <div key={item} className="w-full max-w-[300px] mx-auto">
              <ProductCard width="w-full" height="md:h-[350px]" />
            </div>
          ))}
        </div>
      </section>
      <section className="mb-24 mx-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-[#fa6b81] text-mono">RECENT BLOGS</p>
          <h3 className="dancing-font text-4xl font-extrabold my-4">
            Our Latest News
          </h3>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <p className="w-24 h-1 bg-[#984fff] rounded-full"></p>
          </div>
        </div>
        <div className="flex items-stretch flex-wrap justify-between gap-y-8 gap-x-4">
          <div className="md:max-w-[360px] w-full rounded-2xl shadow-xl/20 group">
            <div className="relative p-[20px]">
              <div className="md:max-w-[320px] w-full md:h-[215px]">
                <img
                  src={womenImage}
                  alt="women image"
                  className="group-hover:scale-105 group-hover:rotate-2 transition-all w-full h-full group-hover:opacity-80"
                />
              </div>
            </div>
            <div className="pt-[20px] px-[40px] pb-[40px]">
              <p className="text-xl font-bold font-sans mb-2">
                Power Up Your Productivity Daily
              </p>
              <p className="leading-8">
                Its some of the time her conduct are placated. Do tuning in am
                enthusiasm gracious…
              </p>
              <Button className="bg-[#733bdb] rounded w-[145px] h-[45px] text-base hover:bg-[#733bdb] font-mono mt-2">
                Learn more
              </Button>
            </div>
          </div>
          <div className="md:max-w-[360px] w-full rounded-2xl shadow-xl/20 group">
            <div className="relative p-[20px]">
              <div className="md:max-w-[320px] w-full md:h-[215px]">
                <img
                  src={womenImage}
                  alt="women image"
                  className="group-hover:scale-105 group-hover:rotate-2 transition-all w-full h-full group-hover:opacity-80"
                />
              </div>
            </div>
            <div className="pt-[20px] px-[40px] pb-[40px]">
              <p className="text-xl font-bold font-sans mb-2">
                Power Up Your Productivity Daily
              </p>
              <p className="leading-8">
                Its some of the time her conduct are placated. Do tuning in am
                enthusiasm gracious…
              </p>
              <Button className="bg-[#733bdb] rounded w-[145px] h-[45px] text-base hover:bg-[#733bdb] font-mono mt-2">
                Learn more
              </Button>
            </div>
          </div>
          <div className="md:max-w-[360px] w-full rounded-2xl shadow-xl/20 group">
            <div className="relative p-[20px]">
              <div className="md:max-w-[320px] w-full md:h-[215px]">
                <img
                  src={womenImage}
                  alt="women image"
                  className="group-hover:scale-105 group-hover:rotate-2 transition-all w-full h-full group-hover:opacity-80"
                />
              </div>
            </div>
            <div className="pt-[20px] px-[40px] pb-[40px]">
              <p className="text-xl font-bold font-sans mb-2">
                Power Up Your Productivity Daily
              </p>
              <p className="leading-8">
                Its some of the time her conduct are placated. Do tuning in am
                enthusiasm gracious…
              </p>
              <Button className="bg-[#733bdb] rounded w-[145px] h-[45px] text-base hover:bg-[#733bdb] font-mono mt-2">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-24 mx-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-[#fa6b81] text-mono">POPULAR PRODUCTS</p>
          <h3 className="dancing-font text-4xl font-extrabold my-4">
            Our Best Product
          </h3>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <span className="w-1 h-1 bg-[#984fff] block rounded-full"></span>
            <p className="w-24 h-1 bg-[#984fff] rounded-full"></p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, index) => index + 1).map((item) => (
            <div key={item} className="w-full max-w-[300px] mx-auto">
              <ProductCard width="w-full" height="md:h-[350px]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
