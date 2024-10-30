"use client";

import {
  CaretDownIcon,
  CaretUpIcon
} from "@radix-ui/react-icons";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import * as React from "react";

// Reusable Combobox Component
interface ComboboxProps {
  isAnimating: boolean;
  onSelect?: (selectedValue: "prev" | "next" | number) => void;
  currentYear: number;
  setCurrentYear: React.Dispatch<React.SetStateAction<Date>>; // Updated type to `number`
}

export function YearBox({
  isAnimating,
  onSelect,
  currentYear,

}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(currentYear);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if the input is a valid 4-digit number
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value as any);

      // If it's exactly 4 digits, trigger the onSelect callback
      if (value.length === 4 && onSelect) {
        onSelect(parseInt(value));
      }
    }
  };

  const handleYearUpdate = (newYear: any) => {
    setInputValue(newYear);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
        >
          <p
            className={`transition-all duration-300 ease-in-out ${isAnimating
              ? "opacity-0 -translate-y-1"
              : " opacity-100 translate-y-0"
              }`}
          >
            {currentYear}
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" w-[120px] space-y-2 p-2">
        <Button
          className="w-full"
          variant="ghost"
          onClick={() => {
            const newYear = currentYear + 1;
            handleYearUpdate(newYear);
            if (onSelect) onSelect("next");
          }}
        >
          <CaretUpIcon width={20} height={20} />
        </Button>
        <Input
          className="w-full text-center"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => {
            const newYear = currentYear - 1;
            handleYearUpdate(newYear);
            if (onSelect) onSelect("prev");
          }}
        >
          <CaretDownIcon width={20} height={20} />
        </Button>
      </PopoverContent>
    </Popover>
  );
}
