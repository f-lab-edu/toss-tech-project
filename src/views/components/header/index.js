import HEADER_LOGO from "../../../logo/header-logo/logo-image.png";
import "./index.css";

const headerTemplate = `
<div id="header_container">
    <div id="outer_container">
      <div id="inner_container">
        <div id="logo_container">
          <img src="${HEADER_LOGO}" alt="header_logo" id="logo_click" />
        </div>
      </div>
    </div>
</div>
`;

const headerComponent = () => {
  const imageLogo = document.getElementById("header"); //Todo:app의 레이아웃인 header,nav,main,footer는 JAE-37 에서 구현 예정
  imageLogo.innerHTML = headerTemplate;
};

export default headerComponent;
