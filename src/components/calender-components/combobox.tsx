import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

// Reusable Combobox Component
interface ComboboxProps {
  items: { value: string; label: string }[];
  placeholder?: string;
  onSelect?: (selectedValue: string) => void;

  isAnimating: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export function Combobox({
  isAnimating,
  items,
  placeholder = "Select an option...",
  onSelect,

  setValue,
  value,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <CalendarIcon className="h-4 w-4 shrink-0 " />
          <p
            className={`transition-all duration-300 ease-in-out ${
              isAnimating
                ? "opacity-0 -translate-y-1"
                : " opacity-100 translate-y-0"
            }`}
          >
            {value
              ? items.find((item) => item.value === value)?.label
              : placeholder}
          </p>
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    if (onSelect)
                      onSelect(currentValue === value ? "" : currentValue);
                  }}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
