import { AddCircle, CalendarAdd } from "iconsax-react";
import EventForm from "./eventform";
import {
  Credenza,
  CredenzaTrigger,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaDescription,
  CredenzaBody,
} from "@/ui/credenza";
import React from "react";
import { Button } from "@/ui/button";

type ButtonProps = {
  variant?: "default" | "secondary" | "primary"; // Optional variant type
  currentDate?: Date; // Optional day prop
  buttonText?: string; // Custom text for the button
  formTitle?: string; // Custom title for the form
  formDescription?: string; // Custom description for the form
  icon?: React.ReactNode; // Custom icon for the button
  CustomForm?: React.FC<{ currentDate?: Date }>; // Custom form component
};

function AddEvent({
  variant = "default",
  currentDate,
  buttonText = "Add Event",
  formTitle = "Add Event",
  formDescription = "Create a new event in your calendar.",
  icon = <AddCircle size={16} color="black" />, // Default icon
  CustomForm, // Accept custom form component
}: ButtonProps) {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        {variant === "default" ? (
          <Button variant="default" className="gap-2 flex items-center">
            <AddCircle size={16} color="white" />
            <span className="lg:block hidden">{buttonText}</span>
          </Button>
        ) : variant === "secondary" ? (
          <Button
            variant="ghost"
            className="inline-flex items-center gap-2 justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent rounded-md w-full h-1/2 text-[8px] sm:text-xs text-muted-foreground hover:text-foreground transition-opacity truncate px-0.5 sm:px-2 sm:opacity-0 lg:py-5 sm:group-hover:opacity-100"
          >
            {icon}
            <span className="lg:block hidden">{buttonText}</span>
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="inline-flex items-center gap-2 justify-center whitespace-nowrap bg-slate-100 font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent rounded-md w-full h-1/2 text-[8px] sm:text-xs text-muted-foreground hover:text-foreground transition-all truncate px-0.5 sm:px-2 lg:py-5"
          >
            {icon}
            <span className="lg:block hidden">{buttonText}</span>
          </Button>
        )}
      </CredenzaTrigger>

      <CredenzaContent className="max-w-5xl">
        <CredenzaHeader className="lg:px-2 px-6">
          <CredenzaTitle>
            <div className="flex items-center justify-start">
              <CalendarAdd className="w-6 h-6" color="black" strokeWidth={20} />
              <span className="ml-2">{formTitle}</span>
            </div>
          </CredenzaTitle>
          <CredenzaDescription className="text-left">
            {formDescription}
          </CredenzaDescription>
        </CredenzaHeader>

        {/* Make the modal body scrollable */}
        <CredenzaBody className="max-h-[80vh] overflow-y-auto">
          {CustomForm ? (
            <CustomForm currentDate={currentDate} /> // Render custom form if provided
          ) : (
            <EventForm currentDate={currentDate} /> // Default form
          )}
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}

export default AddEvent;
