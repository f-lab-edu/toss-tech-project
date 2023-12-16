import "./index.css";
import formatDate from "../list/format-date";

const contentTemplate = (thumbnailImage, title, createdDate, body) => ` 
<main>
  <div id="detail_container">
    <div id="detail_inner_container">
      <div id="detail_img_container">
        <img src="${thumbnailImage}" alt="상세 페이지에 들어있는 이미지" />
      </div>
      <section>
        <div id="detail_title_container">
          <h1>${title}</h1>
        </div>
        <div id="detail_createdDate_container">
          <p>${formatDate(createdDate)}</p>
        </div>
        <div id="detail_body_container">
          <p>${body}</p>
        </div>
      <section>
    </div>
  </div>
</main>
`;

const contentComponet = (articleItem, body) => {
  const {
    thumbnail_image: thumbnailImage,
    title,
    created_date: createdDate,
  } = articleItem;
  const main = document.getElementById("main"); //Todo: JAE-37 티켓에서 app 레이아웃 구현 예정입니다.
  main.innerHTML = contentTemplate(thumbnailImage, title, createdDate, body);
};

export default contentComponet;
