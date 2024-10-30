import { isBefore } from "date-fns";
import { z } from "zod";

function combineDateAndTime(date: Date, time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const combinedDate = new Date(date);
  combinedDate.setHours(hours, minutes);
  return combinedDate;
}

export const formSchema = z
  .object({
    eventname: z.string().min(1, "Event name is required"),
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    startdate: z.date({ required_error: "Start date is required" }),
    starttime: z.string().min(1, "Start time is required"),
    enddate: z.date({ required_error: "End date is required" }),
    endtime: z.string().min(1, "End time is required"),
    phonenumber: z.number().min(10, { message: "Phone number must be at least 10 digits." }), // Adjust this as needed
    email: z.string().email("Invalid email address"),
    hall: z.string(),
  })
  .refine(
    (data: { startdate: Date; starttime: string; enddate: Date; endtime: string; }) => {
      const startDate = combineDateAndTime(data.startdate, data.starttime);
      const endDate = combineDateAndTime(data.enddate, data.endtime);
      return isBefore(startDate, endDate);
    },
    {
      message: "The end date must be on or after the start date",
      path: ["enddate"],
    }
  )
  .refine(
    (data: { startdate: Date; starttime: string; enddate: Date; endtime: string; }) => {
      const startDate = combineDateAndTime(data.startdate, data.starttime);
      const endDate = combineDateAndTime(data.enddate, data.endtime);
      return isBefore(startDate, endDate);
    },
    {
      message: "The end time must be after the start time of the event.",
      path: ["endtime"],
    }
  );
