import HEADER_LOGO from "../../../logo/header-logo/logo-image.png";
import "./index.css";

const headerTemplate = `
<header id="header_container">
  <div id="header_outer_container">
    <div id="header_inner_container">
      <nav id="header_logo_container">
        <a href="/">
          <img src="${HEADER_LOGO}" alt="토스 로고 아이콘" />
        </a>
      </nav>
    </div>
  </div>
</header>
`;

const headerComponent = () => {
  const imageLogo = document.getElementById("header");
  imageLogo.innerHTML = headerTemplate;
};

export default headerComponent;
