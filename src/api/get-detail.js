import getData from "../mock/get-data";
import handler from "../mock/handler";

export default function getDetail() {
  return handler(
    "get",
    "/detail/:id",
    getData("detail"),
    (req, data) => data[req.params.id],
  );
}
