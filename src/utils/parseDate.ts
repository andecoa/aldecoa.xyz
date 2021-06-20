const parseDate = (date: number): string => {
  const d = new Date(date);
  return `${d.toLocaleString("en-us", {
    month: "short",
  })} ${d.getDate()} ${d.getFullYear()}`;
};

export default parseDate;
