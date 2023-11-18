import loadData from "./load-data";
import URL from "./url";

const getMainList = async () => {
  const { articles } = await loadData(URL.main);
  return articles;
};

export default getMainList;
