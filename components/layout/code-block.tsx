export default function ConfigSnippet() {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Configuration Snippet</h2>
            <pre className="overflow-auto text-sm">
                <code>
                    {`"use client";
import { CalendarProps } from "@shadcn-fullcalender/types/event";


export const calendarConfig: CalendarProps['config'] = {
    addEventConfig: {
        variant: 'primary', // Default variant (can be 'primary', 'secondary', etc.)
        buttonText: 'Add Event', // Default button text
        formTitle: 'Create a New Event', // Default form title
        formDescription: 'Testing', // Default form description
        icon: undefined, // Custom icon for the add event button, if needed
        customForm: undefined, // Custom form component to handle add event functions, if needed
    },
    animationConfig: {
        duration: 300, // Default animation duration in milliseconds
    },
};`}
                </code>
            </pre>
        </div>
    );
}
