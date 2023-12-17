import "./index.css";
import formatDate from "../list/format-date";

const contentTemplate = (createdDate, detailContent, image, title) => ` 
<main>
  <div id="detail_container">
    <div id="detail_inner_container">
      <div id="detail_img_container">
        <img src="${image}" alt="썸네일" />
      </div>
      <section>
        <div id="detail_title_container">
          <h1>${title}</h1>
        </div>
        <div id="detail_createdDate_container">
          <p>${formatDate(createdDate)}</p>
        </div>
        <div id="detail_body_container">
          <p>${detailContent}</p>
        </div>
      <section>
    </div>
  </div>
</main>
`;

const contentComponet = articleItem => {
  const {
    created_date: createdDate,
    detailContent,
    thumbnail_image: image,
    title,
  } = articleItem;
  const main = document.getElementById("main");
  main.innerHTML = contentTemplate(createdDate, detailContent, image, title);
};

export default contentComponet;
