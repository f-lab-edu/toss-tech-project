import logoComponent from "../../components/header";
import bannerComponent from "../../components/banner";
import contentComponent from "../../components/content";

const detailPage = articleItem => {
  logoComponent();
  contentComponent(articleItem);
  bannerComponent();
};
export default detailPage;
