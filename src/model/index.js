import getMainList from "./main";
import getDetailContent from "./detail";

function Model() {
  this.mainList = async () => await getMainList();
  this.detailContent = async id => await getDetailContent(id);
}

export default Model;
