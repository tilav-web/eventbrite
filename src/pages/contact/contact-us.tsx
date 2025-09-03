import PageTitle from "@/components/common/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoMailOpenOutline } from "react-icons/io5";

export default function ContactUs() {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <section>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-start justify-between gap-8 md:flex-row flex-col">
          <div className="flex-1">
            <div>
              <h2 className="dancing-font text-4xl font-bold mb-4">
                Don't Hesitate to Contact With Us
              </h2>
              <p>
                Our mission is to revolutionize the way businesses operate by
                leveraging the latest advancements in technology.
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-4 bg-[#f5f2f2] p-6">
                <div className="p-4 text-red-300 bg-white rounded-full">
                  <IoMailOpenOutline size={40} />
                </div>
                <div className="">
                  <h5 className="font-bold text-xl mb-2">Mail Addressl:</h5>
                  <p className="text-black/50">
                    domain@company.com / info@domain.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#f5f2f2] p-6">
                <div className="p-4 text-red-300 bg-white rounded-full">
                  <IoMailOpenOutline size={40} />
                </div>
                <div className="">
                  <h5 className="font-bold text-xl mb-2">Mail Addressl:</h5>
                  <p className="text-black/50">
                    domain@company.com / info@domain.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#f5f2f2] p-6">
                <div className="p-4 text-red-300 bg-white rounded-full">
                  <IoMailOpenOutline size={40} />
                </div>
                <div className="">
                  <h5 className="font-bold text-xl mb-2">Mail Addressl:</h5>
                  <p className="text-black/50">
                    domain@company.com / info@domain.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="flex-1 flex flex-col items-start gap-3 w-full">
            <Input
              className="rounded-none p-4 py-6 border-none bg-[#f7f5f0] text-[#273659] text-base"
              placeholder="Your Name"
            />
            <Input
              className="rounded-none p-4 py-6 border-none bg-[#f7f5f0] text-[#273659] text-base"
              placeholder="Your Email"
            />
            <Input
              className="rounded-none p-4 py-6 border-none bg-[#f7f5f0] text-[#273659] text-base"
              placeholder="Your Subject"
            />
            <Textarea
              className="rounded-none p-4 py-6 border-none bg-[#f7f5f0] text-[#273659] text-base h-[280px]"
              placeholder="Your Message"
            />
            <Button className="bg-[#6f4ee6] px-8 py-6 text-base">
              Send Message
            </Button>
          </form>
        </div>
        <div className="max-w-[1200px] h-[300px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52574.18006217906!2d69.07660006991188!3d34.55643525154675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f0034fb5c01%3A0x5fffca7dce126df3!2z2YXYrNiq2YXYuSDYotio24wg2KrYsdqp24wg2qnYp9io2YQg2KfYs9iq2KfZhtio2YjZhCDYtNi52KjZhyDbsw!5e0!3m2!1sen!2s!4v1756878430090!5m2!1sen!2s"
            width="600"
            height="450"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
