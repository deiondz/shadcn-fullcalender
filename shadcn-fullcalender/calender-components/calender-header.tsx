// components/calender-components/CalenderHeader.tsx

import { TabTypes } from "@shadcn-fullcalender/types/tabs";
import { Dispatch, SetStateAction } from "react";
import AddEvent from "./add-event";
import { MonthHeader } from "./monthheader";
import { Tabs } from "./tabs";
import { YearHeader } from "./yearheader";
import { CalendarProps } from "@shadcn-fullcalender/types/event";
import { Button } from "@shadcn-fullcalender/ui/button";

export interface CalenderHeaderProps {
    currentDate: Date;
    setCurrentDate: Dispatch<SetStateAction<Date>>;
    activeTab: TabTypes;
    setActiveTab: Dispatch<SetStateAction<TabTypes>>;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    isAnimating: boolean;
    handleMonthChange: (action: "prev" | "next" | string) => void;
    handleYearChange: (action: "prev" | "next" | number) => void;
    handleToday: () => void;
    config?: CalendarProps['config'];
}

const CalenderHeader = (props: CalenderHeaderProps) => {
    return (
        <header>
            {props.activeTab === "month" ? (
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
                    <MonthHeader
                        currentDate={props.currentDate}
                        setCurrentDate={props.setCurrentDate}
                        isAnimating={props.isAnimating}
                        value={props.value}
                        setValue={props.setValue}
                        handleMonthChange={props.handleMonthChange}
                        handleYearChange={props.handleYearChange}
                    />
                    <div className="flex items-center justify-between gap-4">
                        <AddEvent
                            CustomForm={props.config?.addEventConfig?.customForm}
                            buttonText={props.config?.addEventConfig?.buttonText}
                            formDescription={props.config?.addEventConfig?.formDescription}
                            formTitle={props.config?.addEventConfig?.formTitle}
                            icon={props.config?.addEventConfig?.icon}
                        />
                        <Tabs
                            activeTab={props.activeTab}
                            setActiveTab={props.setActiveTab}
                        />
                        <Button
                            variant="outline"
                            onClick={props.handleToday}
                        >
                            Today
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
                    <YearHeader
                        getFullYear={props.currentDate.getFullYear()}
                        setCurrentDate={props.setCurrentDate}
                        isAnimating={props.isAnimating}
                        handleYearChange={props.handleYearChange}
                    />
                    <div className="flex items-center justify-center gap-4">
                        <AddEvent
                            CustomForm={props.config?.addEventConfig?.customForm}
                            buttonText={props.config?.addEventConfig?.buttonText}
                            formDescription={props.config?.addEventConfig?.formDescription}
                            formTitle={props.config?.addEventConfig?.formTitle}
                            icon={props.config?.addEventConfig?.icon}
                            variant={props.config?.addEventConfig?.variant}
                        />
                        <Tabs
                            activeTab={props.activeTab}
                            setActiveTab={props.setActiveTab}
                        />
                        <Button
                            variant="outline"
                            onClick={props.handleToday}
                        >
                            This Year
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default CalenderHeader;
