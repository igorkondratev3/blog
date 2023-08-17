export const normalizeDate = (yyyymmdd) =>
  yyyymmdd.split("-").toReversed().join("-");
