export type HolidayInfo = {
  date: string;
  name: string;
};

export const getHolidays = async (
  countryCode = "AT"
): Promise<HolidayInfo[]> => {
  const response = await fetch(
    `https://date.nager.at/api/v3/PublicHolidays/2024/${countryCode}`
  );

  if (response.status === 200) return response.json();

  throw new Error(
    `Error for country code '${countryCode}': ${response.statusText}`
  );
};
