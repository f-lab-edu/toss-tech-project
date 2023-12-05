import BANNER_LOGO from "../../../logo/banner-logo/logo-image.png";
import "./index.css";

const bannerTemplate = `
<footer id="banner_container">
    <div id="banner_logo_container">
        <img src="${BANNER_LOGO}" alt="로고 아이콘" />
    </div>
    <section>
        <div id="banner_title_container">
            <h3>토스팀이 만드는 수만은 혁신의 순간들</h3>
        </div>
        <div id="banner_summary_container">
            <p>당신과 함께 만들고 싶습니다.</p>
            <p>지금, 토스팀에 합류하세요.</p>
        </div>
    </section>
</footer>
`;

const bannerComponent = () => {
  const footer = document.getElementById("footer"); //Todo: JAE-37 티켓에서 app 레이아웃 구현 예정입니다.
  footer.innerHTML = bannerTemplate;
};

export default bannerComponent;
