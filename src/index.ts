import { getHolidays } from "./getHolidays";
import { writeFile } from "fs/promises";

type HolidayInfo = {
  date: string;
  name: string;
};

export const main = async () => {
  const data = (await getHolidays()) as HolidayInfo[];

  console.dir(data, { depth: null });

  const csv = data.map((d) => `${d.name}, ${d.date}`).join("\n");

  writeFile("holidays.csv", csv);
};

main();
