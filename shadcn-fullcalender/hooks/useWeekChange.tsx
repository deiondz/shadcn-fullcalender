import { addWeeks, format, subWeeks } from "date-fns";
import { useCallback } from "react";

interface UseWeekChangeProps {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    setValue: (value: string) => void;
    triggerAnimation: (updateState: () => void) => void;
    months: { value: string }[];
}

export const useWeekChange = ({
    currentDate,
    setCurrentDate,
    setValue,
    triggerAnimation,
    months,
}: UseWeekChangeProps) => {
    return useCallback((action: "prev" | "next" | string) => {
        triggerAnimation(() => {
            if (action === "prev") {
                const newDate = subWeeks(currentDate, 1);
                setCurrentDate(newDate);
                setValue(format(newDate, "MMMM").toLowerCase());
            } else if (action === "next") {
                const newDate = addWeeks(currentDate, 1);
                setCurrentDate(newDate);
                setValue(format(newDate, "MMMM").toLowerCase());
            } else {
                const monthIndex = months.findIndex((month) => month.value === action);
                if (monthIndex !== -1) {
                    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
                }
            }
        });
    }, [currentDate, setCurrentDate, setValue, triggerAnimation, months]);
};
