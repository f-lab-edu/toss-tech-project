import loadData from "./load-data";
import { URL } from "./constant";

const getDetailContent = async id => await loadData(`${URL.detail}/${id}`);

export default getDetailContent;
