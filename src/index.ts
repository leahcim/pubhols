import { getHolidays } from "./getHolidays";
import { writeFile } from "fs/promises";

type HolidayInfo = {
  date: string;
  name: string;
};

const formattedDate = (date: Date) =>
  // 1st param 'undefined' to use current locale
  date.toLocaleDateString(undefined, { month: "long", day: "numeric" });

const daysUntil = (date: Date) => {
  const today = new Date();
  const millisecondDiff = date.getTime() - today.getTime();
  const dayDiff = Math.ceil(millisecondDiff / (1000 * 60 * 60 * 24));
  return dayDiff >= 0 ? dayDiff : NaN;
};

const positiveDaysUntil = (date: Date) => {
  const days = daysUntil(date);
  return `${days >= 0 ? days : ""}`;
};

const isWeekendStr = (date: Date) =>
  // weekend assumed to be Sat/Sun only
  date.getDay() < 6 ? "No" : "Yes";

export const main = async () => {
  const data = (await getHolidays()) as HolidayInfo[];

  console.dir(data, { depth: null });

  const csv = data
    .map(({ date, name }) => ({ name, date: new Date(date) }))
    .map(
      ({ date, name }) =>
        `${name}, ${formattedDate(date)}, ${positiveDaysUntil(
          date
        )}, ${isWeekendStr(date)}`
    )
    .join("\n");

  writeFile("holidays.csv", csv);
};

main();
