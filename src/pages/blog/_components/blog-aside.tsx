import MainSearch from "@/components/common/main-search";
import { womenImage } from "@/utils/images";
import { Link } from "react-router-dom";

export default function BlogAside() {
  return (
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
                <span className="flex-1">Power Up Your Productivity Daily</span>
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
                <span className="flex-1">Power Up Your Productivity Daily</span>
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
                <span className="flex-1">Power Up Your Productivity Daily</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
