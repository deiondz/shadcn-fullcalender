// components/calender-components/Views.tsx

import { Card } from "@components/ui/card"; // shadcn Card for structure
import { MonthView } from "./monthview";
import YearView from "./yearview";
import { TabTypes } from "@shadcn-fullcalender/types/tabs";
import { CalendarProps } from "@shadcn-fullcalender/types/event";
import { WeekView } from "./weekview";

export interface ViewsProps extends CalendarProps {
    activeTab: TabTypes;
    isAnimating: boolean;
    currentDate: Date;
}
const Views = (props: ViewsProps) => {
    const isYearView = props.activeTab === "year";
    const isMonthView = props.activeTab === "month";
    const isWeekView = props.activeTab === "week";
    return (
        <Card
            className={`transition-all rounded-lg border bg-card duration-300 text-card-foreground shadow-sm p-2 sm:p-4 ${props.isAnimating ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
                }`}
        >
            <div style={{ minWidth: "100%", display: "table" }}>
                {isYearView && <YearView currentDate={props.currentDate} events={props.events} />}
                {isMonthView && <MonthView currentDate={props.currentDate} events={props.events} />}
                {isWeekView && <WeekView currentDate={props.currentDate} events={props.events} />}
            </div>
        </Card>
    );
};

export default Views;
