import { getData } from "../mock/get-data";
import { handler } from "../mock/handler";

export default function getMain() {
  return handler("get", "/main", getData("main"), (req, data) => data);
}
