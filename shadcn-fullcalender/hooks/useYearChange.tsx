import { useCallback } from "react";
import { addYears, subYears } from "date-fns";

interface UseYearChangeProps {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    triggerAnimation: (updateState: () => void) => void;
}

export const useYearChange = ({
    currentDate,
    setCurrentDate,
    triggerAnimation,
}: UseYearChangeProps) => {
    return useCallback((action: "prev" | "next" | number) => {
        triggerAnimation(() => {
            if (action === "prev") {
                setCurrentDate(subYears(currentDate, 1));
            } else if (action === "next") {
                setCurrentDate(addYears(currentDate, 1));
            } else if (typeof action === "number") {
                setCurrentDate(new Date(action, currentDate.getMonth(), 1));
            }
        });
    }, [currentDate, setCurrentDate, triggerAnimation]);
};
