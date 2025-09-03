import { personImage } from "@/utils/images";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { IoMdStar } from "react-icons/io";

export default function ProductCard({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <motion.div
      className={`${width} cursor-pointer`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Rasm */}
      <div className="relative">
        <div className={`${width} ${height} overflow-hidden`}>
          <img
            className="h-full w-full rounded-2xl hover:rounded-none transition-all"
            src={personImage}
            alt="person image"
          />
        </div>
        <button className="absolute bottom-1 right-2 p-2 rounded-full  z-10 bg-[#c5ebd9]">
          <Heart size={18} className="text-[#246949]" />
        </button>
      </div>

      {/* Info qismi */}
      <div className="text-center mt-2">
        <p className="text-[#273659] font-bold">Black Coat</p>

        {/* Yulduzchalar */}
        <p className="flex items-center justify-center">
          <IoMdStar size={24} className="text-yellow-500" />
          <IoMdStar size={24} className="text-yellow-500" />
          <IoMdStar size={24} className="text-yellow-500" />
          <IoMdStar size={24} className="text-yellow-500" />
          <IoMdStar size={24} className="text-yellow-500" />
        </p>

        {/* Narx animatsiyasi */}
        <div className="relative w-full h-8 overflow-hidden flex items-center justify-center">
          {/* $11.0 */}
          <motion.p
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: -40, opacity: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute text-lg font-bold text-gray-800"
          >
            $11.0
          </motion.p>

          {/* By from Amazon */}
          <motion.p
            variants={{
              rest: { y: 40, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute text-sm text-gray-600"
          >
            By from Amazon
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
