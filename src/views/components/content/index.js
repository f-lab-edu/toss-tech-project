import formatDate from "../list/format-date";
import "./index.css";

const contentTemplate = (head, body) => ` 
<main>
  <div id="detail_container">
    <div id="detail_inner_container">
      <div id="detail_img_container">
        <img src="${
          head.thumbnail_image
        }" alt="상세 페이지에 들어있는 이미지" />
      </div>
      <section>
        <div id="detail_title_container">
          <h1>${head.title}</h1>
        </div>
        <div id="detail_created_container">
          <p>${formatDate(head.created_date)}</p>
        </div>
        <div id="detail_content_container">
          <p>${body}</p>
        </div>
      <section>
    </div>
  </div>
</main>
`;

//Todo: JAE_28 티켓에서 컨트롤러 구현을 통해 head와 body를 받아올 예정입니다.
const contentComponet = (head, body) => {
  const main = document.getElementById("main"); //Todo: JAE-37 티켓에서 app 레이아웃 구현 예정입니다.
  main.innerHTML = contentTemplate(head, body);
};

export default contentComponet;
