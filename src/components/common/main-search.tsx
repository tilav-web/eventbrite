import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function MainSearch() {
  return (
    <Label className="flex items-center bg-[#ededeb] rounded-full px-3 py-2 gap-2 mb-8">
      <Input
        className="border-none shadow-none focus-visible:ring-0 text-[#364466] placeholder:text-[#364466]"
        placeholder="Search..."
      />
      <Search />
    </Label>
  );
}
