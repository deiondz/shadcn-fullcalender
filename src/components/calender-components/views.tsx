import { Card } from "@/ui/card";
import { MonthView } from "./monthview";
import YearView from "./yearview";
import { CalendarProps } from "@/types/event";
import { TabTypes } from "@/types/tabs";
import React from "react";

export interface ViewsProps extends CalendarProps {
  activeTab: TabTypes;
  isAnimating: boolean;
  currentDate: Date;
}
const Views = (props: ViewsProps) => {
  return (
    <Card
      className={`transition-all rounded-lg border bg-card duration-300 text-card-foreground shadow-sm p-2 sm:p-4 ${
        props.isAnimating
          ? "opacity-0 -translate-y-1"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div style={{ minWidth: "100%", display: "table" }}>
        {props.activeTab === "month" ? (
          <MonthView currentDate={props.currentDate} events={props.events} />
        ) : (
          <YearView currentDate={props.currentDate} events={props.events} />
        )}
      </div>
    </Card>
  );
};

export default Views;
