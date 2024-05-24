import { writeFile } from "fs/promises";
import { getHolidays } from "./api";
import { buildCsvRow } from "./csv";

export const main = async () => {
  const countryCode =
    process.argv.length === 3 ? process.argv[2].toUpperCase() : "AT";

  let holidays: Holiday[] = [];

  try {
    holidays = await getHolidays(countryCode);
  } catch (error) {
    console.warn((error as Error)?.message);
    console.info("See README.md for supported country codes");
  }

  const csv = holidays.map((holiday) => buildCsvRow(holiday)).join("\n");

  const csvFileName = "holidays.csv";
  const csvHeader = "# Name, Date, Days until, Weekend";

  try {
    await writeFile(csvFileName, csvHeader + "\n" + csv);
    if (csv.length > 0) console.info(`See output in '${csvFileName}'`);
  } catch (error) {
    console.error("Failed writing file");
  }
};

main();
