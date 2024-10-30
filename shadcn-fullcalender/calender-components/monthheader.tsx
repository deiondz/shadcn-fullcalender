"use client";
import { YearBox } from "./yearbox";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Combobox } from "./combobox";
import { format } from "date-fns";
import { months } from "@shadcn-fullcalender/constants";
import { Button } from "@shadcn-fullcalender/ui/button";

export function MonthHeader(props: any) {

  return (
    <div className="flex items-center space-x-1 sm:space-x-2">
      <Button
        variant="outline"
        onClick={() => {
          props.handleMonthChange("prev");
        }}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      <Combobox
        value={props.value}
        setValue={props.setValue}
        items={months}
        placeholder={format(props.currentDate, "MMMM")}
        isAnimating={props.isAnimating}
        onSelect={(e: any) => {
          props.handleMonthChange(e);
        }}
      />
      <YearBox
        isAnimating={props.isAnimating}
        currentYear={props.currentDate.getFullYear()}
        setCurrentYear={props.setCurrentDate}
        onSelect={(e: any) => {
          props.handleYearChange(e);
        }}
      />
      <Button
        variant="outline"
        onClick={() => {
          props.handleMonthChange("next");
        }}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
