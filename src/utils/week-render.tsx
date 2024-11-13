import React from "react";

interface RenderDaysOfWeekProps {
  weekDays: string[];
}

export const renderDaysOfWeek = ({ weekDays }: RenderDaysOfWeekProps) => {
  return weekDays.map((day) => (
    <div key={day} className="text-center font-medium text-xs sm:text-sm">
      {day}
    </div>
  ));
};
