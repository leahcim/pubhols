type HolidayApi = {
  date: string;
  name: string;
};

export const getHolidays = async (countryCode = "AT"): Promise<Holiday[]> => {
  const response = await fetch(
    `https://date.nager.at/api/v3/PublicHolidays/2024/${countryCode}`
  );

  if (response.status === 200) {
    const holidaysApi = (await response.json()) as HolidayApi[];
    return holidaysApi.map(({ date, name }) => ({
      name,
      date: new Date(date),
    }));
  }

  throw new Error(
    `Error for country code '${countryCode}': ${response.statusText}`
  );
};
