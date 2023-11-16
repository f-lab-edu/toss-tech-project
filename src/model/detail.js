import loadData from "./load-data";

const getDetailData = async id => {
  const contents = await loadData(`/detail/${id}`);
  return contents;
};

export default getDetailData;
