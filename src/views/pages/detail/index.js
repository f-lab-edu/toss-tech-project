import headerComponent from "../../components/header";
import bannerComponent from "../../components/banner";
import contentComponent from "../../components/content";

const detailPage = articleItem => {
  headerComponent();
  contentComponent(articleItem);
  bannerComponent();
};
export default detailPage;
