import loadData from "./load-data";
import URL from "./url";

const getDetailContent = async id => {
  const articleDetail = await loadData(`${URL.detail}/${id}`);
  console.log(articleDetail);
  return articleDetail;
};

export default getDetailContent;
