import getMainList from "./main";
import getDetailContent from "./detail";

function Model() {
  this.mainList = async () => await getMainList();
  this.articleItem = async id => {
    const [mainList, detailContent] = await Promise.all([
      getMainList(),
      getDetailContent(id),
    ]);
    return { ...mainList[id], detailContent };
  };
}

export default Model;
