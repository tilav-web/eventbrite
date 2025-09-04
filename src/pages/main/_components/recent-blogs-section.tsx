import { Button } from "@/components/ui/button";
import { womenImage } from "@/utils/images";

export default function RecentBlogsSection() {
  return (
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
  );
}
