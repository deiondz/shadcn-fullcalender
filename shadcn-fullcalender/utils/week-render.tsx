interface RenderDaysOfWeekProps {
    weekDays: string[];
}

export const renderDaysOfWeek = ({
    weekDays,
}: RenderDaysOfWeekProps) => {
    return weekDays.map((day, i) => (
        <div key={day} className="text-center font-medium text-xs sm:text-sm">
            {day}
        </div>
    ));
};
