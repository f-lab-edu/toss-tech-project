import instance from "./axios";
import { URL } from "./url";

const getMainList = async () => {
  const { MAIN } = URL;
  const { articles } = await instance.get(MAIN);
  console.log(articles);
  return articles;
};

export default getMainList;
