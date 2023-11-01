import getData from "../mock/get-data";
import handler from "../mock/handler";

const getMain = () =>
  handler("get", "/main", getData("main"), (req, data) => data);

export default getMain;
