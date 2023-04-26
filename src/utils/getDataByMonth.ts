export const getDataByMonth = <T extends { createdDate: string }>(
  data: T[]
): [string, number][] => {
  const currentDate = new Date();
  const counts = new Map<string, number>();
  const result: [string, number][] = [];

  for (let i = 0; i < 12; i++) {
    const monthYear = currentDate.toLocaleString("en-us", {
      month: "short",
      year: "numeric",
    });
    result.unshift([monthYear, 0]);
    counts.set(monthYear, 0);
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  for (const item of data) {
    const createdDate = new Date(item.createdDate);
    const key = createdDate.toLocaleString("en-us", {
      month: "short",
      year: "numeric",
    });
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return result.map(([monthYear]) => [monthYear, counts.get(monthYear) ?? 0]);
};
