export const formattedDate = (date: Date) =>
  // 1st param 'undefined' to use current locale
  date.toLocaleDateString(undefined, { month: "long", day: "numeric" });

const daysUntil = (date: Date) => {
  const today = new Date();
  const millisecondDiff = date.getTime() - today.getTime();
  return Math.ceil(millisecondDiff / (1000 * 60 * 60 * 24));
};

export const positiveDaysUntil = (date: Date) => {
  const days = daysUntil(date);
  // "0 days until" case included
  return `${days >= 0 ? days : ""}`;
};

export const isWeekendStr = (date: Date) =>
  // weekend assumed to be Sat/Sun only
  date.getDay() < 6 ? "No" : "Yes";
