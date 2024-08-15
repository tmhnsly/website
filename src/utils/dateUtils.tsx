import { format } from "date-fns";

type DateFormat = "day" | "month" | "year" | "full";

export function formatDate(
  dateString: string,
  formatType: DateFormat = "full"
): string {
  const date = new Date(dateString);

  switch (formatType) {
    case "day":
      return format(date, "d"); // Returns just the day as a number
    case "month":
      return format(date, "MMMM"); // Returns the full month name
    case "year":
      return format(date, "yyyy"); // Returns the full year
    case "full":
    default:
      const day = format(date, "do");
      const month = format(date, "MMMM");
      const year = format(date, "yyyy");
      return `${day} ${month} ${year}`; // Returns the full date in the specified format
  }
}
