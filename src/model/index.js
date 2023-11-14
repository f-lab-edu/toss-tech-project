import getMainData from "./main";
import getDetailData from "./detail";

function Model() {
  this.mainData = async () => await getMainData();
  this.detailData = async id => await getDetailData(id);
}

export default Model;
