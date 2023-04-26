export const filterByCreatedDate = (
  objects: any[],
  monthOffset: number
): number => {
  const currentDate = new Date();
  const cutoffDate = new Date();
  cutoffDate.setMonth(currentDate.getMonth() - monthOffset);

  return objects?.filter((obj) => {
    const createdDate = new Date(obj?.createdDate);
    return createdDate > cutoffDate;
  }).length;
};
