import { format, parse } from "date-fns";

const formatDate = inputdate => {
  const date = parse(inputdate, "yyyyMMdd", new Date());
  const formattedDate = format(date, "yyyy. MM. dd");
  return formattedDate;
};

export default formatDate;
