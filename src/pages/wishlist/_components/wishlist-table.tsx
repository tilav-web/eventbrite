import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  X,
  Check,
  Facebook,
  Twitter,
  MessageCircle,
  Copy,
  Mail,
} from "lucide-react";
import { personImage } from "@/utils/images";

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  dateAdded: string;
  inStock: boolean;
}

const mockData: WishlistItem[] = [
  {
    id: "1",
    name: "11-inch Tablet Pro 2020 Space Gray",
    image: personImage,
    originalPrice: 529.0,
    salePrice: 449.0,
    dateAdded: "September 3, 2025",
    inStock: true,
  },
   {
    id: "2",
    name: "11-inch Tablet Pro 2020 Space Gray",
    image: personImage,
    originalPrice: 529.0,
    salePrice: 449.0,
    dateAdded: "September 3, 2025",
    inStock: true,
  },
];

export function WishlistTable() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedItems(mockData.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (itemId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      setSelectAll(false);
    }
  };

  const removeItem = (itemId: string) => {
    // Remove item logic would go here
    console.log("Remove item:", itemId);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Default wishlist</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 border">
              <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} />
            </TableHead>
            <TableHead className="font-semibold border p-5"></TableHead>
            <TableHead className="font-semibold border p-5"></TableHead>
            <TableHead className="font-semibold border p-5">
              Product Name
            </TableHead>
            <TableHead className="font-semibold border p-5">
              Unit Price
            </TableHead>
            <TableHead className="font-semibold border p-5">
              Date Added
            </TableHead>
            <TableHead className="font-semibold border p-5">
              Stock Status
            </TableHead>
            <TableHead className="w-32 border p-5"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="border p-5">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={(checked) =>
                      handleSelectItem(item.id, checked as boolean)
                    }
                  />
                </div>
              </TableCell>
              <TableCell className="border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="h-6 w-6 p-0 bg-gray-200 hover:bg-gray-500 rounded-full hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="border p-5">
                <div className="w-[75px] h-[95px]">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="rounded-md object-cover w-full h-full"
                  />
                </div>
              </TableCell>
              <TableCell className="border p-5">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{item.name}</span>
                </div>
              </TableCell>
              <TableCell className="border p-5">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 line-through">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                  <span className="font-semibold">
                    ${item.salePrice.toFixed(2)}
                  </span>
                </div>
              </TableCell>
              <TableCell className="border p-5">{item.dateAdded}</TableCell>
              <TableCell className="border p-5">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">In stock</span>
                </div>
              </TableCell>
              <TableCell className="border p-5">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-4">
          <Select defaultValue="actions">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="actions">Actions</SelectItem>
              <SelectItem value="add-to-cart">Add to Cart</SelectItem>
              <SelectItem value="remove">Remove</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            size="sm"
          >
            Apply Action
          </Button>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            size="sm"
          >
            Add Selected to Cart
          </Button>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            size="sm"
          >
            Add All to Cart
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Share on</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
              </svg>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
