import PageTitle from "@/components/common/page-title";
import BlogAside from "./_components/blog-aside";
import BlogCard from "./_components/blog-card";

export default function Blog() {
  return (
    <div className="">
      <PageTitle title="Blog" />
      <section className="max-w-[1200px] mx-auto px-4 flex items-start gap-4 py-12 flex-col lg:flex-row">
        <div className="flex-1">
          <BlogCard />
          <BlogCard />
        </div>
        <BlogAside />
      </section>
    </div>
  );
}
