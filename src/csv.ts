import { formattedDate, isWeekendStr, positiveDaysUntil } from "./date";

export const buildCsvRow = ({ date, name }: { name: string; date: Date }) =>
  `${name}, ${formattedDate(date)}, ${positiveDaysUntil(date)}, ${isWeekendStr(
    date
  )}`;
