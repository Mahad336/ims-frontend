//shifted this logic to backend ;will remove it later

export const descSortDataByCreatedDate = (data: any) =>
  data.sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);

    return dateB.getTime() - dateA.getTime();
  });
