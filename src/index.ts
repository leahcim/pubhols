import { writeFile } from "fs/promises";
import { buildCsvRow } from "./csv";
import { HolidayInfo, getHolidays } from "./pub-hols-api";

export const main = async () => {
  const countryCode =
    process.argv.length === 3 ? process.argv[2].toUpperCase() : "AT";

  let holidays: HolidayInfo[] = [];

  try {
    holidays = await getHolidays(countryCode);
  } catch (error) {
    console.warn((error as Error)?.message);
    console.info("See README.md for supported country codes");
  }

  const csv = holidays
    .map(({ date, name }) => ({ name, date: new Date(date) }))
    .map((holiday) => buildCsvRow(holiday))
    .join("\n");

  const csvHeader = "# Name, Date, Days until, Weekend";
  writeFile("holidays.csv", csvHeader + "\n" + csv);
};

main();
