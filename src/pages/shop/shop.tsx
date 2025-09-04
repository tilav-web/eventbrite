import PageTitle from "@/components/common/page-title";
import ProductCard from "@/components/common/product-card";
import ShopFilterSheet from "@/components/common/shop-filter-sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ShopAside from "./_components/shop-aside";

export default function Shop() {
  return (
    <div className="">
      <PageTitle title="Shop" />
      <section className="max-w-[1200px] mx-auto p-4 flex items-start gap-6">
        <div className="hidden lg:block max-w-[235px] flex-1">
          <ShopAside />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <ShopFilterSheet />
              <p className="hidden md:block">Showing 1–12 of 15 results</p>
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
