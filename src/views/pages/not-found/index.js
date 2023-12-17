import headerComponent from "../../components/header";
import errorComponent from "../../components/error";
import bannerComponent from "../../components/banner";

const notFoundPage = () => {
  headerComponent();
  errorComponent();
  bannerComponent();
};

export default notFoundPage;
