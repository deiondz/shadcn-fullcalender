import "../assets/styles/globals.css";
import { useState } from "react";
import CalenderHeader from "./calender-components/calender-header";
import Views from "./calender-components/views";
import { months } from "@/constants";
import { useAnimationTrigger } from "@/hooks/useAnimationTrigger";
import { useMonthChange } from "@/hooks/useMonthChange";
import { useToday } from "@/hooks/useToday";
import { useYearChange } from "@/hooks/useYearChange";
import { FullCalendarProps } from "@/types/event";
import { TabTypes } from "@/types/tabs";
import { useWeekChange } from "@/hooks/useWeekChange";
import React from "react";

export const FullCalendar = ({ events, config }: FullCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState<TabTypes>("month"); // Default to "month"

  const [value, setValue] = useState<string>("");
  const { isAnimating, triggerAnimation } = useAnimationTrigger(
    config?.animationConfig?.duration || 300,
  );

  const handleWeekChange = useWeekChange({
    currentDate,
    setCurrentDate,
    setValue,
    triggerAnimation,
    months,
  });

  const handleMonthChange = useMonthChange({
    currentDate,
    setCurrentDate,
    setValue,
    triggerAnimation,
    months,
  });

  const handleYearChange = useYearChange({
    currentDate,
    setCurrentDate,
    triggerAnimation,
  });

  const handleToday = useToday({
    setCurrentDate,
    setValue,
    triggerAnimation,
  });

  return (
    <div>
      <CalenderHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        value={value}
        setValue={setValue}
        isAnimating={isAnimating}
        handleWeekChange={handleWeekChange}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
        handleToday={handleToday}
        config={config}
      />
      <Views
        currentDate={currentDate}
        activeTab={activeTab}
        isAnimating={isAnimating}
        events={events}
      />
    </div>
  );
};
