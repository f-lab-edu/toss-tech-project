import headerComponent from "../../components/header";
import articleComponent from "../../components/list";
import bannerComponent from "../../components/banner";

const mainPage = list => {
  headerComponent();
  articleComponent(list);
  bannerComponent();
};

export default mainPage;
