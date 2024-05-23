export const getHolidays = async () => {
  const response = await fetch('https://date.nager.at/api/v3/PublicHolidays/2024/AT')

  return response.json()
}