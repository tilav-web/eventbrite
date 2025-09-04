import { womenImage } from "@/utils/images";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <div className="flex items-start gap-8 pb-20 border-b border-[#E5E7EB] mb-20 flex-col md:flex-row">
      <div className="md:max-w-[300px] w-full md:h-[200px] overflow-hidden">
        <img className="w-full h-full" src={womenImage} alt="woman image" />
      </div>
      <div className="flex-1 leading-8">
        <h3 className="text-3xl mb-5">Power Up Your Productivity Daily</h3>
        <p className="flex items-center gap-2 text-sm text-[#364466] mt-2">
          <Link to={"/"}>January 15, 2025</Link>
          <span className="w-1 h-1 bg-black rounded-full"></span>
          <Link to={"/"}>by NayyarShaikh</Link>
          <span className="w-1 h-1 bg-black rounded-full"></span>
          <Link to={"/"}>No comments yet</Link>
        </p>
        <p className="line-clamp-4 text-[#364466] mt-4 text-base/7">
          Goodness acknowledgment flats up sympathize dumbfounded delightful.
          Holding up him unused enduring towards. Proceeding despairing
          particularly so to. Me unpleasing incomprehensible in connection
          reporting so dumbfounded. What inquire leaf may nor upon entryway.
          Tended stay my do stairs. Goodness grinning genial am so gone by
          sincere in workplaces hearted. Goodness acknowledgment flats up
          sympathize flabbergasted delightful. Holding up him modern enduring
          towards. Proceeding despairing particularly so to. Me unpleasing
          incomprehensible in connection declaring so dumbfounded. What inquire
          leaf may nor upon entryway. Tended stay my do stairs. Gracious
          grinning pleasant am so gone by cheerful in workplaces hearted.
        </p>
      </div>
    </div>
  );
}
