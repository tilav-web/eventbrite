import CarouselSection from "./_components/carousel-section";
import BannerSection from "./_components/banner-section";
import PopularProductSection from "./_components/popular-product-section";
import RecentBlogsSection from "./_components/recent-blogs-section";
import SecondPopularProductSection from "./_components/second-popular-product-section";

export default function Main() {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <CarouselSection />
      <BannerSection />
      <PopularProductSection />
      <RecentBlogsSection />
      <SecondPopularProductSection />
    </div>
  );
}
