import logoComponent from "../../components/header";
import errorComponent from "../../components/error";
import bannerComponent from "../../components/banner";

const notFoundPage = () => {
  logoComponent();
  errorComponent();
  bannerComponent();
};

export default notFoundPage;
