import instance from "./axios";
import { URL } from "./url";

const getDetailContent = async id => {
  const { DETAIL } = URL;
  const articleDetail = await instance.get(`${DETAIL}/${id}`);
  return articleDetail;
};

export default getDetailContent;
