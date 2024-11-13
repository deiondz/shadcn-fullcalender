# Full Calendar Component

## Overview

This repository contains a custom Full Calendar component recreated from [0xBoom's](https://github.com/0xBoom) version, which I originally discovered in a [GitHub discussion](https://github.com/shadcn-ui/ui/discussions/3214#discussioncomment-10702520) about Full Calendar components made with ShadCN. Since many people are eagerly awaiting the release of [his version](https://0xboom-shadcn-event-calendar.vercel.app/), I decided to create a similar one that includes both month and year views. While it may not yet have all of 0xBoom's features, I aimed to replicate the functionality as closely as possible. Looking forward to the official release! 🚀

## Getting Started

To get started with the Full Calendar component, ensure you have the necessary dependencies installed in your project.

## Usage

```
npm install @deiondz/shadcn-fullcalendar
```

Minimal implementation in `src/index.tsx`

```
import { newevents } from "@/data/events";
import { FullCalendar } from "@deiondz/fullcalendar";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1">
        <Fullcalendar
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
```

## Contributing

Feel free to contribute to the project by submitting a pull request or opening an issue on the GitHub repository.

## Questions & Suggestions

If you have any questions or suggestions, feel free to reach out on Twitter [@Deion_Dz](https://x.com/Deion_Dz).

## Customization

You can customize the Full Calendar component by creating a config file and adding it to the component.

### Config File Options

The config file contains options for customizing the component.

### Rendering the Calendar

Pass the events and config to the Full Calendar component to render the calendar.
