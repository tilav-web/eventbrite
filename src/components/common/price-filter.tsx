import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

export function PriceFilter() {
  const minValue = 10;
  const maxValue = 1400;
  const [priceRange, setPriceRange] = useState([minValue, maxValue]);

  return (
    <div className="w-full">
      <Label className="text-lg font-medium text-gray-900 mb-4">
        Filter by Price
      </Label>
      {/* Slider */}
      <div className="mb-6">
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={minValue}
          max={maxValue}
          step={10}
          minStepsBetweenThumbs={1}
          aria-label="Narx diapazoni slayderi"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button>Filter</Button>
        <div className="text-gray-700 font-medium text-sm text-center">
          Price: ${priceRange[0].toLocaleString()} — $
          {priceRange[1].toLocaleString()}
        </div>
      </div>
    </div>
  );
}
