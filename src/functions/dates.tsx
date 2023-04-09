export const todayDate = new Date().toLocaleDateString("en-US");
export const calcDate = (days: number) => {
  const twentyDaysAgo = new Date(
    Date.now() - days * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-US");

  return twentyDaysAgo;
};
