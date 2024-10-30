import { addDays, format, parseISO } from "date-fns";

import React from "react";
import { Event } from "@shadcn-fullcalender/types/event";
import EventModal from "@shadcn-fullcalender/event-components/eventmodal";
import AddEvent from "@shadcn-fullcalender/calender-components/add-event";
import ListAllEvents from "@shadcn-fullcalender/event-components/listallevents";

interface RenderDaysInMonthProps {
    currentDate: Date;
    events: Event[];
    startWeek: Date;
    daysOfWeek: string[];
}

export const renderDaysInMonth = ({
    currentDate,
    events,
    startWeek,
}: RenderDaysInMonthProps) => {
    const days: React.ReactNode[] = [];
    let day = startWeek;

    // Today's date
    const todayDate = format(new Date(), "d");
    const todayMonth = format(new Date(), "M");
    const todayYear = format(new Date(), "yyyy");

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (format(day, "M") === format(currentDate, "M")) {
                const isToday =
                    format(day, "d") === todayDate &&
                    format(day, "M") === todayMonth &&
                    format(day, "yyyy") === todayYear;

                // Filter events for the specific day
                const eventsForDay = events.filter((event) => {
                    const startDate = format(parseISO(event.startdate), "yyyy-MM-dd");
                    const endDate = format(parseISO(event.enddate), "yyyy-MM-dd");
                    const formattedDay = format(day, "yyyy-MM-dd");

                    if (startDate === endDate) {
                        return startDate === formattedDay;
                    } else {
                        return formattedDay >= startDate && formattedDay <= endDate;
                    }
                });

                days.push(
                    <div
                        key={day.toString()}
                        className={`p-1 sm:p-2 h-[80px] sm:h-[130px] border rounded relative group flex flex-col ${isToday ? "text-blue-600" : "text-foreground"
                            }`}
                    >
                        {/* Day number */}
                        <div
                            className={`font-semibold mb-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm ${isToday
                                ? "text-white rounded-full w-6 flex items-center justify-center bg-black aspect-square"
                                : "text-foreground"
                                }`}
                        >
                            {format(day, "d")}
                        </div>

                        {/* Events list */}
                        <div className="flex-grow overflow-hidden">
                            {eventsForDay.length === 0 && <AddEvent variant="secondary" currentDate={day} />}
                            {eventsForDay.length === 1 && (
                                <>
                                    <EventModal eventdetails={eventsForDay[0]} />
                                    <AddEvent variant="secondary" currentDate={day} />
                                </>
                            )}
                            {eventsForDay.length > 1 && (
                                <>
                                    <EventModal
                                        eventdetails={eventsForDay[0]}
                                    />
                                    {eventsForDay.length > 2 && (
                                        <ListAllEvents
                                            view="day"
                                            date={day}
                                            eventsForDay={eventsForDay}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                );
            }
            day = addDays(day, 1);
        }
    }
    return days;
};
