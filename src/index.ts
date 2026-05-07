function generateDateRange(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = [];
  let current = new Date(startDate);
  while (current <= endDate) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

// Relative time (e.g. "2 hours ago")
function timeAgo(date:Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const key in intervals) {
    const value = Math.floor(seconds / intervals[key as keyof typeof intervals]);

    if (value >= 1) {
      return `${value} ${key}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export { generateDateRange,timeAgo };
