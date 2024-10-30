"use client";
import { DashboardIcon, GridIcon } from "@radix-ui/react-icons";
type TabTypes = "month" | "year"; // Add more tab types if necessary

export function Tabs(props: any) {
  return (
    <div className=" w-full flex items-center justify-center gap-2 h-10 sm:w-[240px]">
      <div className="inline-flex items-center h-full justify-between rounded-md border border-input bg-transparent p-1 w-full">
        {/* Tab: Month */}
        <button
          onClick={() => props.setActiveTab("month")}
          className={`relative inline-flex gap-3 h-full items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md px-2  w-full transition-all duration-500 ease-in-out ${
            props.activeTab === ("month" as TabTypes)
              ? "bg-secondary text-secondary-foreground"
              : "hover:bg-secondary/50 hover:text-secondary-foreground"
          } cursor-pointer`}
        >
          <DashboardIcon width={15} height={15} />
          <span
            className={`transition-all duration-500 ease-in-out ${
              props.activeTab === ("month" as TabTypes)
                ? "opacity-100 max-w-xs"
                : "opacity-0 max-w-0 overflow-hidden"
            }`}
          >
            Month
          </span>
        </button>

        {/* Tab: Year */}
        <button
          onClick={() => props.setActiveTab("year")}
          className={`relative inline-flex h-full gap-3 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md px-2  w-full transition-all duration-500 ease-in-out ${
            props.activeTab === "year"
              ? "bg-secondary text-secondary-foreground"
              : "hover:bg-secondary/50 hover:text-secondary-foreground"
          } cursor-pointer`}
        >
          <GridIcon width={15} height={15} />

          <span
            className={`transition-all duration-500 ease-in-out ${
              props.activeTab === "year"
                ? "opacity-100 max-w-xs"
                : "opacity-0 max-w-0 overflow-hidden"
            }`}
          >
            Year
          </span>
        </button>
      </div>
    </div>
  );
}
