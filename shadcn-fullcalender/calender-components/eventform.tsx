"use client";
import { Button } from "@shadcn-fullcalender/ui/button";
import { Calendar } from "@shadcn-fullcalender/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shadcn-fullcalender/ui/form";
import { Input } from "@shadcn-fullcalender/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shadcn-fullcalender/ui/popover";
import { ScrollArea } from "@shadcn-fullcalender/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shadcn-fullcalender/ui/select"; // Fixed import path
import { Textarea } from "@shadcn-fullcalender/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@shadcn-fullcalender/ui/command";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@shadcn-fullcalender/ui/alert-dialog"

import { Calendar as CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Danger } from "iconsax-react";
import { formSchema } from "@shadcn-fullcalender/validation/event";

const halls = [
  {
    label: "Arrupe Hall",
    value: "arrupe_auditorium",
  },
  {
    label: "Magis Hall",
    value: "ignatius_conference_room",
  },
  {
    label: "Xavier Hall",
    value: "xavier_multipurpose_hall",
  },
  {
    label: "Luxury Hall",
    value: "luxury_hall",
  },
  {
    label: "Main Hall",
    value: "main_hall",
  },
  {
    label: "Conference Room A",
    value: "conference_room_a",
  },
  {
    label: "Auditorium",
    value: "auditorium",
  },
  {
    label: "Meeting Room 1",
    value: "meeting_room_1",
  },
  {
    label: "Grand Ballroom",
    value: "grand_ballroom",
  },
  {
    label: "Tech Hall",
    value: "tech_hall",
  },
  {
    label: "Ocean View Hall",
    value: "ocean_view_hall",
  },
  {
    label: "Business Center",
    value: "business_center",
  },
] as const;

// Form schema with validation

interface Event {
  eventname?: string;      // Name of the event
  name?: string;           // Name of the person organizing or associated with the event
  description?: string;    // Brief description of the event
  startdate?: Date;      // Start date in ISO 8601 format
  starttime?: string;      // Start time in HH:mm format
  enddate?: Date;        // End date in ISO 8601 format
  endtime?: string;        // End time in HH:mm format
  phonenumber?: number;    // Phone number as a string
  email?: string;          // Email address as a string
  hall?: string;           // Name of the hall or venue for the event
}




function DeleteEvent() {
  return (<AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive" type="button">
        <Danger className="mr-2 h-4 w-4" size={16} color="white" />
        Delete Event
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will cancel your event
          and remove it from the calendar.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant="destructive" className="bg-red-500 hover:bg-red-400" type="button">
            <Danger className="mr-2 h-4 w-4" size={16} color="white" />
            Continue
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>);
}


export default function EventForm({ values, currentDate }: { values?: Event, currentDate?: Date }) {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventname: values?.eventname || "",
      hall: values?.hall || "",
      name: values?.name || "",
      email: values?.email || "",
      phonenumber: values?.phonenumber || undefined,
      description: values?.description || "",
      startdate: values?.startdate ? new Date(values.startdate) : currentDate ? new Date(currentDate) : new Date(), // Format startdate
      starttime: values?.starttime || "", // Format starttime
      enddate: values?.enddate ? new Date(values.enddate) : undefined, // Format enddate
      endtime: values?.endtime || "",
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <div>
          <h2 className="text-lg font-semibold">Event Created</h2>
          <p className="text-sm font-normal text-muted-foreground">
            Your event has been successfully created.
          </p>
        </div>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 lg:py-0 py-4 w-full mx-auto px-2"
      >
        <div className="grid grid-cols-2 items-baseline gap-4">
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="eventname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter event name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="hall"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Hall</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? halls.find((hall) => hall.value === field.value)
                              ?.label
                            : "Select hall"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search hall..." />
                        <CommandList>
                          <CommandEmpty>No hall found.</CommandEmpty>
                          <CommandGroup>
                            {halls.map((hall) => (
                              <CommandItem
                                value={hall.label}
                                key={hall.value}
                                onSelect={() => {
                                  form.setValue("hall", hall.value);
                                  console.log("Selected hall:", hall.value); // Debug log
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    hall.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {hall.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-baseline gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-baseline gap-4">
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl className="w-full">
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value ? parseInt(value.replace(/\D/g, '')) : null); // Convert to number
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter event description"
                  className="resize-none "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 justify-center items-baseline gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="startdate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Set the event start date.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6 w-full">
            <FormField
              control={form.control}
              name="starttime"
              render={({ field }) => (
                <FormItem className="flex flex-col h-full">
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={(e) => {
                        field.onChange(e); // change the time
                      }}
                    >
                      <SelectTrigger className="font-normal focus:ring-0 h-full w-[120px]">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className="h-[200px] w-[120px]">
                          {Array.from({ length: 24 }).map((_, index) => {
                            const hour = index < 10 ? `0${index}:00` : `${index}:00`;
                            return (
                              <SelectItem value={hour} key={hour}>
                                {hour}
                              </SelectItem>
                            );
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 items-baseline gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="enddate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Set the event end date.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6 w-full">
            <FormField
              control={form.control}
              name="endtime"
              render={({ field }) => (
                <FormItem className="flex flex-col h-full">
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={(e) => {
                        field.onChange(e); // change the time
                      }}
                    >
                      <SelectTrigger className="font-normal focus:ring-0 h-full w-[120px]">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className="h-[200px] w-[120px]">
                          {Array.from({ length: 24 }).map((_, index) => {
                            const hour =
                              index < 10 ? `0${index}:00` : `${index}:00`;
                            return (
                              <SelectItem value={hour} key={hour}>
                                {hour}
                              </SelectItem>
                            );
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="gap-4 flex">
          <Button type="submit" >
            Submit
          </Button>
          {
            values && <DeleteEvent />
          }
        </div>
      </form>
    </Form>
  );
}
