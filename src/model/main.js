import loadData from "./load-data";

const getMainData = async () => {
  const { articles } = await loadData("/main");
  return articles;
};

export default getMainData;
