import HEADER_LOGO from "../../../logo/header-logo/logo-image.png";
import "./index.css";

const headerTemplate = `
<div id="header_container">
    <div id="header_outer_container">
      <div id="header_inner_container">
        <span id="header_logo_container">
          <img src="${HEADER_LOGO}" alt="header_logo" id="logo_click" />
        </span>
      </div>
    </div>
</div>
`;
const headerComponent = () => {
  const imageLogo = document.getElementById("header");
  imageLogo.innerHTML = headerTemplate;
};

export default headerComponent;
