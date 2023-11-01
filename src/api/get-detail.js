import getData from "../mock/get-data";
import handler from "../mock/handler";

const getDetail = () =>
  handler(
    "get",
    "/detail/:id",
    getData("detail"),
    (req, data) => data[req.params.id],
  );

export default getDetail;
