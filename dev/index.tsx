import { newevents } from "@/data/events";
import { FullCalendar } from "@/index";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1">
        <FullCalendar
          events={newevents}
          config={{
            addEventConfig: {
              variant: "primary", // Default variant (can be 'primary', 'secondary', etc.)
              buttonText: "Add Event", // Default button text
              formTitle: "Create a New Event", // Default form title
              formDescription: "Testing", // Default form description
              icon: undefined, // Custom icon for the button, if needed
              customForm: undefined, // Custom form component, if needed
            },
            animationConfig: {
              duration: 300, // Default animation duration in milliseconds
            },
          }}
        />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
