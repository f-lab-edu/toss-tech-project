import loadData from "./load-data";
import { URL } from "./constant";

const getMainList = async () => {
  const { articles } = await loadData(URL.main);
  return articles;
};

export default getMainList;
