import instance from "./axios";
import { URL } from "./url";

const getDetailContent = async id => {
  const { DETAIL } = URL;
  const article = await instance.get(`${DETAIL}/${id}`);
  return article;
};

export default getDetailContent;
