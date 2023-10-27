import mainJSON from "../../__fixtures__/main.json";
import detailJSON from "../../__fixtures__/detail.json";

export function getData(data) {
  switch (data) {
    case "main":
      return mainJSON;
    case "detail":
      return detailJSON;
    default:
      return console.error("NO DATA");
  }
}
