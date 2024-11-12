import { CalendarAdd } from "iconsax-react";
import EventForm from "@/components/calender-components/eventform";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/ui/credenza";
import EventColoredButton from "./event-colored-button";
import React from "react";

type ColorScheme = "red" | "blue" | "green" | "default"; // Define the ColorScheme type

type ButtonProps = {
  eventdetails: {
    eventname: string;
    description: string;
    colorScheme?: ColorScheme;
  };
};

function EventModal({ eventdetails }: ButtonProps) {
  return (
    <Credenza>
      <CredenzaTrigger className="w-full" asChild>
        <EventColoredButton
          eventdetails={eventdetails}
          colorScheme={eventdetails?.colorScheme}
        />
      </CredenzaTrigger>

      <CredenzaContent className="max-w-5xl">
        <CredenzaHeader className="lg:px-2 px-6 ">
          <CredenzaTitle>
            <div className="flex items-center justify-start">
              <CalendarAdd className="w-6 h-6" color="black" strokeWidth={20} />
              <span className="ml-2">Modify Event</span>
            </div>
          </CredenzaTitle>
          <CredenzaDescription className="text-left">
            Modify the details of the event.
          </CredenzaDescription>
        </CredenzaHeader>

        {/* Make the EventModal body scrollable */}
        <CredenzaBody className="max-h-[80vh]  overflow-y-auto">
          <EventForm values={eventdetails} />
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}

export default EventModal;
