import HEADER_LOGO from "../../../logo/header-logo/logo-image.png";
import "./index.css";

const headerTemplate = `
<header id="header_container">
    <div id="header_inner_container">
      <div id="header_logo_container">
        <a href="/">
          <img src="${HEADER_LOGO}" alt="토스 로고 아이콘" />
        </a>
      </div>
    </div>
</header>
`;

const headerComponent = () => {
  const headerElement = document.getElementById("header"); //Todo: JAE-37 티켓이서 app 레이아웃 구현 예정입니다.
  headerElement.innerHTML = headerTemplate;
};

export default headerComponent;
