import ProductCard from "@/components/common/product-card";

export default function SecondPopularProductSection() {
  return (
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
  );
}
