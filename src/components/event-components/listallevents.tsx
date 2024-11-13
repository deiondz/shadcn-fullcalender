import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/ui/credenza";
import { Button } from "@/ui/button";
import AddEvent from "@/components/calender-components/add-event";
import { CalendarAdd } from "iconsax-react";
import EventModal from "./eventmodal"; // Importing EventModalProps type
import { Eventyearviewbtn } from "./yearviewlist";
import React from "react";
import { FullCalendarEvent } from "@/types/event";

// type Event = {
//   eventname: string;
//   description: string;
// };

type ButtonProps = {
  view: "day" | "year"; // Specify the views available, e.g., "day" or "month"
  eventsForDay: FullCalendarEvent[]; // Array of Event objects
  eventsForDate?: FullCalendarEvent[]; // Optional prop for year view (pass if needed)
  date?: Date; // Optional prop for the date (pass if needed)
  index?: number; // Optional index prop (if needed for the year view button)
};

function ListAllEvents({
  eventsForDay,
  view,
  eventsForDate,
  date,
  index,
}: ButtonProps) {
  return (
    <Credenza>
      <CredenzaTrigger className="w-full" asChild>
        {view === "day" ? (
          <Button
            variant="ghost"
            className="text-xs w-full text-muted-foreground mb-1"
          >
            +{eventsForDay.length - 1} more
          </Button>
        ) : (
          <Eventyearviewbtn
            key={date?.toString()} // Optional chaining for date
            eventsForDate={eventsForDate || []}
            date={date ?? new Date()}
            index={index}
          />
        )}
      </CredenzaTrigger>

      <CredenzaContent className="max-w-lg">
        <CredenzaHeader className="lg:px-2 px-6">
          <CredenzaTitle>
            <div className="flex items-center justify-start">
              <CalendarAdd className="w-6 h-6" color="black" strokeWidth={20} />
              <span className="ml-2">All the events for the day</span>
            </div>
          </CredenzaTitle>
          <CredenzaDescription className="text-left">
            Click on an event to view more details.
          </CredenzaDescription>
        </CredenzaHeader>

        {/* Make the ListAllEvents body scrollable */}
        <CredenzaBody className="max-h-[80vh]  overflow-y-auto">
          {eventsForDay.map((event, index) => (
            <EventModal key={index} eventdetails={event} />
          ))}
          <div className="w-full">
            <AddEvent variant="primary" currentDate={date} />
          </div>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}

export default ListAllEvents;
