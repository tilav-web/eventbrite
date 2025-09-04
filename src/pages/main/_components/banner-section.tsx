import { Button } from "@/components/ui/button";
import { nikeImage } from "@/utils/images";

export default function BannerSection() {
  return (
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
  );
}
