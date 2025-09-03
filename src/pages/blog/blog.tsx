import MainSearch from "@/components/common/main-search";
import PageTitle from "@/components/common/page-title";
import { womenImage } from "@/utils/images";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="">
      <PageTitle title="Blog" />
      <section className="max-w-[1200px] mx-auto px-4 flex items-start gap-4 py-12 flex-col lg:flex-row">
        <div className="flex-1">
          <div className="flex items-start gap-8 pb-20 border-b border-[#E5E7EB] mb-20 flex-col md:flex-row">
            <div className="md:max-w-[300px] w-full md:h-[200px] overflow-hidden">
              <img
                className="w-full h-full"
                src={womenImage}
                alt="woman image"
              />
            </div>
            <div className="flex-1 leading-8">
              <h3 className="text-3xl mb-5">
                Power Up Your Productivity Daily
              </h3>
              <p className="flex items-center gap-2 text-sm text-[#364466] mt-2">
                <Link to={"/"}>January 15, 2025</Link>
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <Link to={"/"}>by NayyarShaikh</Link>
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <Link to={"/"}>No comments yet</Link>
              </p>
              <p className="line-clamp-4 text-[#364466] mt-4 text-base/7">
                Goodness acknowledgment flats up sympathize dumbfounded
                delightful. Holding up him unused enduring towards. Proceeding
                despairing particularly so to. Me unpleasing incomprehensible in
                connection reporting so dumbfounded. What inquire leaf may nor
                upon entryway. Tended stay my do stairs. Goodness grinning
                genial am so gone by sincere in workplaces hearted. Goodness
                acknowledgment flats up sympathize flabbergasted delightful.
                Holding up him modern enduring towards. Proceeding despairing
                particularly so to. Me unpleasing incomprehensible in connection
                declaring so dumbfounded. What inquire leaf may nor upon
                entryway. Tended stay my do stairs. Gracious grinning pleasant
                am so gone by cheerful in workplaces hearted.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[235px] flex-1 w-full">
          <MainSearch />
          <div className="flex flex-col gap-8">
            <div>
              <h5 className="text-xl">Categories</h5>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="hover:text-red-300 transition-all">
                  <Link to={"/category/business"}>Business</Link>
                </li>
                <li className="hover:text-red-300 transition-all">
                  <Link to={"/category/health-fitness"}>Health & Fitness</Link>
                </li>
                <li className="hover:text-red-300 transition-all">
                  <Link to={"/category/motivation"}>Motivation</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl">Recent Posts</h5>
              <ul className="flex flex-col gap-10 mt-4">
                <li className="hover:text-red-300 transition-all">
                  <Link
                    to={"/category/business"}
                    className="flex items-start gap-4"
                  >
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-md">
                      <img
                        className="w-full h-full"
                        src={womenImage}
                        alt="women image"
                      />
                    </div>
                    <span className="flex-1">
                      Power Up Your Productivity Daily
                    </span>
                  </Link>
                </li>
                <li className="hover:text-red-300 transition-all">
                  <Link
                    to={"/category/business"}
                    className="flex items-start gap-4"
                  >
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-md">
                      <img
                        className="w-full h-full"
                        src={womenImage}
                        alt="women image"
                      />
                    </div>
                    <span className="flex-1">
                      Power Up Your Productivity Daily
                    </span>
                  </Link>
                </li>
                <li className="hover:text-red-300 transition-all">
                  <Link
                    to={"/category/business"}
                    className="flex items-start gap-4"
                  >
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-md">
                      <img
                        className="w-full h-full"
                        src={womenImage}
                        alt="women image"
                      />
                    </div>
                    <span className="flex-1">
                      Power Up Your Productivity Daily
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
