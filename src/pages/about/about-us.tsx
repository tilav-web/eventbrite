import PageTitle from "@/components/common/page-title";
import { laptopImage, teamManImage } from "@/utils/images";
import { ChartColumn } from "lucide-react";

export default function AboutUs() {
  return (
    <div>
      <PageTitle title="About Us" />
      <section>
        <div className="max-w-[1200px] w-full mx-auto px-6 pt-14 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="dancing-font md:text-6xl font-extrabold mb-6 text-5xl">
              Pioneering Tomorrow's Digital Frontier
            </h2>
            <p className="leading-8">
              Our mission is to revolutionize the way businesses operate by
              leveraging the latest advancements in technology. We are committed
              to delivering exceptional software solutions that drive
              efficiency, productivity, and growth.
            </p>
          </div>
          <div>
            <img className="rounded-2xl" src={laptopImage} alt="laptop image" />
          </div>
        </div>
      </section>
      <section className="bg-[#f7f5f0] py-20">
        <div className="flex flex-col items-center gap-4">
          <h3 className="dancing-font text-6xl">Why us?</h3>
          <span className="h-1 w-18 bg-[#6f4ee6] rounded-full"></span>
        </div>
        <div className="max-w-[1200px] w-full mx-auto px-6 pt-14 pb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-[#5817ad] p-6 rounded-2xl">
              <ChartColumn className="text-white" size={40} />
            </div>
            <h4 className="text-2xl">Created With Love!</h4>
            <p className="text-center leading-8 text-base tracking-wide">
              The so they instead would with and who have looked broad. Near
              would rationale the people.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-[#5817ad] p-6 rounded-2xl">
              <ChartColumn className="text-white" size={40} />
            </div>
            <h4 className="text-2xl">Created With Love!</h4>
            <p className="text-center leading-8 text-base tracking-wide">
              The so they instead would with and who have looked broad. Near
              would rationale the people.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-[#5817ad] p-6 rounded-2xl">
              <ChartColumn className="text-white" size={40} />
            </div>
            <h4 className="text-2xl">Created With Love!</h4>
            <p className="text-center leading-8 text-base tracking-wide">
              The so they instead would with and who have looked broad. Near
              would rationale the people.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="flex flex-col items-center gap-4">
          <h3 className="dancing-font text-6xl">Our Team</h3>
          <span className="h-1 w-18 bg-[#6f4ee6] rounded-full"></span>
        </div>
        <div className="max-w-[1200px] w-full mx-auto px-6 pt-14 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-[500px] mx-auto md:max-w-full">
            <div className="overflow-hidden max-w-[500px] max-h-[500px] md:max-w-[165px] md:max-h-[165px]">
              <img
                className="w-full h-full"
                src={teamManImage}
                alt="team man image"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#2b2b2b] text-3xl font-bold">John Doe</h4>
              <p>Founder, CEO & Lead Designer</p>
              <p>
                Fate may geared have to this goddesses, but this derived require
                the you it material origin chance the reasoning in of they
                coffee.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-[500px] mx-auto md:max-w-full">
            <div className="overflow-hidden max-w-[500px] max-h-[500px] md:max-w-[165px] md:max-h-[165px]">
              <img
                className="w-full h-full"
                src={teamManImage}
                alt="team man image"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#2b2b2b] text-3xl font-bold">John Doe</h4>
              <p>Founder, CEO & Lead Designer</p>
              <p>
                Fate may geared have to this goddesses, but this derived require
                the you it material origin chance the reasoning in of they
                coffee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
