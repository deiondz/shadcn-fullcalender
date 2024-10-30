import { format } from "date-fns";

export function Eventyearviewbtn(props: {
    isToday: (arg0: any) => any; date: string | number | Date; isCurrentMonth: (arg0: any, arg1: any) => any; index: any; eventsForDate: any[]; onClick?: () => void;
}) {
    return (
        <button type="button" onClick={props.onClick} className={`h-6 w-6 flex items-center justify-center text-xs cursor-pointer text-foreground`}>
            <div className={`h-6 aspect-square flex flex-col items-center justify-center rounded-full relative transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 ${props.isToday(props.date) ? "bg-black text-white" : props.isCurrentMonth(props.date, props.index) ? "" : "text-gray-400"}`}>
                {format(props.date, "d")}
                <div className="flex items-center space-x-[0.2px] justify-center ">
                    {props.eventsForDate.length > 0 ? <>
                        {props.eventsForDate.slice(0, 4).map((_event, index) => <div key={index} // Add a unique key for each event
                            className={`w-1 bg-yellow-500 aspect-square rounded-full  ${index === 3 ? "opacity-50" : "" // Optional: Add a class for the 4th item
                                }`} />)}
                    </> : null}
                </div>
            </div>
        </button>
    );
}