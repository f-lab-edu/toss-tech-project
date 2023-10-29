import mainJSON from "../../__fixtures__/main.json";
import detailJSON from "../../__fixtures__/detail.json";

export function getData(target) {
  switch (target) {
    case "main":
      return mainJSON;
    case "detail":
      return detailJSON;
    default:
      return console.error("NO DATA");
  }
}
