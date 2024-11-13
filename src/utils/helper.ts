// Check if a date is today
export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// Check if a date belongs to the current month
export const isCurrentMonth = (date: Date, month?: number) => {
  return date.getMonth() === month;
};
