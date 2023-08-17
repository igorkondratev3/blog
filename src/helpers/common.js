export const normalizeDate = (yyyymmdd) =>
  yyyymmdd.split("-").toReversed().join("-");

export const getDate = () => {
  const date = new Date();
  const yyyymmdd = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const correctDate = yyyymmdd
    .split("-")
    .map((dateP) => (dateP.length === 1 ? "0" + dateP : dateP))
    .join("-");
  return correctDate;
};
