import mainJSON from "../../__fixtures__/main.json";
import detailJSON from "../../__fixtures__/detail.json";

function getData(json) {
  try {
    switch (json) {
      case "main":
        return mainJSON;
      case "detail":
        return detailJSON;
      default:
        throw new Error("NO DATA");
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(error);
    }
  }
}

export default getData;
