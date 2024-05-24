import { formattedDate, isWeekendStr, positiveDaysUntil } from "./date";

export const buildCsvRow = ({ date, name }: Holiday) =>
  `${name}, ${formattedDate(date)}, ${positiveDaysUntil(date)}, ${isWeekendStr(
    date
  )}`;
