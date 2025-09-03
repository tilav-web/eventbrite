import Breadcrumb from "@/utils/breadcrumb";

export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="bg-[#fcf5e9] flex items-center justify-center py-[50px]">
      <div className="text-center">
        <h2 className="text-5xl font-bold font-sans text-[#4c4c4c]">{title}</h2>
        <Breadcrumb />
      </div>
    </div>
  );
}
