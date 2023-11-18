import loadData from "./load-data";
import URL from "./url";

const getDetailContent = async id => {
  const articleDetail = await loadData(`${URL.detail}/${id}`);
  return articleDetail;
};

export default getDetailContent;
