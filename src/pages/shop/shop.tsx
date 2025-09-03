import MainSearch from "@/components/common/main-search";
import PageTitle from "@/components/common/page-title";
import { PriceFilter } from "@/components/common/price-filter";
import ProductCard from "@/components/common/product-card";
import ShopFilterSheet from "@/components/common/shop-filter-sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { womenImage } from "@/utils/images";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="">
      <PageTitle title="Shop" />
      <section className="max-w-[1200px] mx-auto p-4 flex items-start gap-6">
        <aside className="max-w-[235px] flex-1 hidden lg:block">
          <MainSearch />
          <div className="mb-10">
            <PriceFilter />
          </div>
          <div className="mb-8">
            <h5 className="text-xl mb-7">Product Categories</h5>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-red-300 transition-all flex items-center justify-between">
                <Link to={"/product-category/electronics/"}>Electronics</Link>
                <span>(3)</span>
              </li>
              <li className="hover:text-red-300 transition-all flex items-center justify-between">
                <Link to={"/product-category/jackets"}>Jackets</Link>
                <span>(5)</span>
              </li>
              <li className="hover:text-red-300 transition-all flex items-center justify-between">
                <Link to={"/product-category/man"}>Man</Link>
                <span>(5)</span>
              </li>
              <li className="hover:text-red-300 transition-all flex items-center justify-between">
                <Link to={"/product-category/pdf-books"}>PDF Books</Link>
                <span>(5)</span>
              </li>
              <li className="hover:text-red-300 transition-all flex items-center justify-between">
                <Link to={"/product-category/t-shirts"}>T-Shirts</Link>
                <span>(5)</span>
              </li>
              <li className="hover:text-red-300 transition-all flex items-center justify-between">
                <Link to={"/product-category/uncategorized"}>
                  Uncategorized
                </Link>
                <span>(0)</span>
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <h5 className="text-xl mb-8">Top rated products</h5>
            <ul className="flex flex-col gap-5">
              <li className="hover:text-red-300 transition-all border-b pb-2">
                <Link
                  to={"/category/business"}
                  className="flex items-start gap-4"
                >
                  <div className="w-[60px] h-[60px] overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={womenImage}
                      alt="women image"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start">
                    <span className="text-sm">Buck Butte Insulated</span>
                    <span className="flex items-center justify-center">
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                    </span>
                    <span>$32.00.$30.00</span>
                  </div>
                </Link>
              </li>
              <li className="hover:text-red-300 transition-all border-b pb-2">
                <Link
                  to={"/category/business"}
                  className="flex items-start gap-4"
                >
                  <div className="w-[60px] h-[60px] overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={womenImage}
                      alt="women image"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start">
                    <span className="text-sm">Buck Butte Insulated</span>
                    <span className="flex items-center justify-center">
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                    </span>
                    <span>$32.00.$30.00</span>
                  </div>
                </Link>
              </li>
              <li className="hover:text-red-300 transition-all border-b pb-2">
                <Link
                  to={"/category/business"}
                  className="flex items-start gap-4"
                >
                  <div className="w-[60px] h-[60px] overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={womenImage}
                      alt="women image"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start">
                    <span className="text-sm">Buck Butte Insulated</span>
                    <span className="flex items-center justify-center">
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                    </span>
                    <span>$32.00.$30.00</span>
                  </div>
                </Link>
              </li>
              <li className="hover:text-red-300 transition-all border-b pb-2">
                <Link
                  to={"/category/business"}
                  className="flex items-start gap-4"
                >
                  <div className="w-[60px] h-[60px] overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={womenImage}
                      alt="women image"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start">
                    <span className="text-sm">Buck Butte Insulated</span>
                    <span className="flex items-center justify-center">
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                    </span>
                    <span>$32.00.$30.00</span>
                  </div>
                </Link>
              </li>
              <li className="hover:text-red-300 transition-all border-b pb-2">
                <Link
                  to={"/category/business"}
                  className="flex items-start gap-4"
                >
                  <div className="w-[60px] h-[60px] overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={womenImage}
                      alt="women image"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 items-start">
                    <span className="text-sm">Buck Butte Insulated</span>
                    <span className="flex items-center justify-center">
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                      <IoMdStar size={24} className="text-yellow-500" />
                    </span>
                    <span>$32.00.$30.00</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl mb-6">Product tags</h5>
            <ul className="flex items-center flex-wrap gap-2">
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  autumn
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  Books
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  fashion
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  Finance
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  Jacket
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  Man
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  Men
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  summer
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  T-Shirtd
                </Link>
              </li>
              <li className="my-1">
                <Link
                  to={"/"}
                  className="p-2 border hover:bg-rose-400 hover:text-white transition-all"
                >
                  Winter
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <ShopFilterSheet />
              <p>Showing 1–12 of 15 results</p>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Default sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Default sorting</SelectItem>
                <SelectItem value="#1">Sort by popularity</SelectItem>
                <SelectItem value="#2">Sort by popularity</SelectItem>
                <SelectItem value="#3">Sort by popularity</SelectItem>
                <SelectItem value="#4">Sort by popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 15 }, (_, index) => index + 1).map(
                (item) => (
                  <div
                    key={item}
                    className="max-w-[205px] mx-auto cursor-pointer"
                  >
                    <ProductCard width="max-w-[205px] w-full" height="" />
                  </div>
                )
              )}
            </div>
            <div>pagination</div>
          </div>
        </div>
      </section>
    </div>
  );
}
