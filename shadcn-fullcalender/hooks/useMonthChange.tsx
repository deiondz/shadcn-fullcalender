import { useCallback } from "react";
import { addMonths, format, subMonths } from "date-fns";

interface UseMonthChangeProps {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    setValue: (value: string) => void;
    triggerAnimation: (updateState: () => void) => void;
    months: { value: string }[];
}

export const useMonthChange = ({
    currentDate,
    setCurrentDate,
    setValue,
    triggerAnimation,
    months,
}: UseMonthChangeProps) => {
    return useCallback((action: "prev" | "next" | string) => {
        triggerAnimation(() => {
            if (action === "prev") {
                const newDate = subMonths(currentDate, 1);
                setCurrentDate(newDate);
                setValue(format(newDate, "MMMM").toLowerCase());
            } else if (action === "next") {
                const newDate = addMonths(currentDate, 1);
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
