import { useCallback } from "react";
import { format } from "date-fns";

interface UseTodayProps {
    setCurrentDate: (date: Date) => void;
    setValue: (value: string) => void;
    triggerAnimation: (updateState: () => void) => void;
}

export const useToday = ({
    setCurrentDate,
    setValue,
    triggerAnimation,
}: UseTodayProps) => {
    return useCallback(() => {
        const today = new Date();
        triggerAnimation(() => {
            setCurrentDate(today);
            setValue(format(today, "MMMM").toLowerCase());
        });
    }, [setCurrentDate, setValue, triggerAnimation]);
};
