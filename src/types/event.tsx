export interface FullCalendarEvent {
  eventname: string; // Name of the event
  description: string; // Brief description of the event
  startdate: string; // Start date in ISO 8601 format
  starttime: string; // Start time in HH:mm format
  enddate: string; // End date in ISO 8601 format
  endtime: string; // End time in HH:mm format
  colorSchema?: string; // Color of the event
}

export interface FullCalendarProps {
  events: FullCalendarEvent[];
  config?: {
    addEventConfig?: {
      variant?: "default" | "secondary" | "primary";
      buttonText?: string;
      formTitle?: string;
      formDescription?: string;
      icon?: React.ReactNode;
      customForm?: React.FC<{ currentDate?: Date }>;
    };
    animationConfig?: {
      duration?: number;
    };
  };
}
