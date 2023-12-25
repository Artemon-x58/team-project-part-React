export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDaysInMonth(monthName, year) {
  const months = {
    january: 31,
    february: isLeapYear(year) ? 29 : 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };

  if (months.hasOwnProperty(monthName)) {
    return Array.from({ length: months[monthName] }, (_, i) => i + 1);
  } else {
    throw new Error('Invalid month name');
  }
}
