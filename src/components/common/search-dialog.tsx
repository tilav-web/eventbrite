import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Search />
      </DialogTrigger>
      <DialogContent className="rounded-xs">
        <DialogHeader>
          <DialogTitle>Type to search</DialogTitle>
        </DialogHeader>
        <Label className="border p-2">
          <Input className="border-none shadow-none focus-visible:ring-0" />
          <Search />
        </Label>
      </DialogContent>
    </Dialog>
  );
}
