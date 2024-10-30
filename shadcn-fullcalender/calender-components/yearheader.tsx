import { Button } from "@components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { YearBox } from "./yearbox";

export function YearHeader(props: any) {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2">
      <Button
        variant="outline"
        onClick={() => {
          props.handleYearChange("prev");
        }}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>

      <YearBox
        isAnimating={props.isAnimating}
        currentYear={props.getFullYear}
        setCurrentYear={props.setCurrentDate}
        onSelect={(e: any) => {
          props.handleYearChange(e);
        }}
      />
      <Button
        variant="outline"
        onClick={() => {
          props.handleYearChange("next");
        }}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
