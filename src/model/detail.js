import responseData from "./response-data";

const getDetailData = async id => {
  try {
    const detailData = await responseData(`/detail/${id}`);
    return detailData;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`can not getDetailData:${error}`);
    }
    return null;
  }
};

export default getDetailData;
