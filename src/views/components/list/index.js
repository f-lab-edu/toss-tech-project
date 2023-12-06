import "./index.css";
import formatDate from "./format-date";

const listTemplate = `
<main>
    <div id="list_container">
        <div id="list_inner_container">
            <div id="title_container">
                <h1>개발</h1>
            </div>
            <ul id="article_list"></ul>
        </div>
    </div>
</main>  
`;

const listContainerRender = () => {
  const main = document.getElementById("main"); //Todo: JAE-37 티켓에서 app 레이아웃 구현 예정입니다.
  main.innerHTML = listTemplate;
};

const articleTemplate = (list, id) => `
<article>
    <div id="article_img_container">
        <img src="${list[id].thumbnail_image}" />
    </div>
    <section>
        <div id="article_title_container">
            <h1>${list[id].title}</h1>
        </div>
        <div id="article_summary_container">
            <p>${list[id].summary}</p>
        </div>
        <div id="article_created_container">
            <p>${formatDate(list[id].created_date)}</p>
        </div>
    </section>
</article>
`;

//Todo: JAE_28 티켓에서 컨트롤러 구현을 통해 list를 받아올 예정입니다.
const listComponent = list => {
  listContainerRender();
  const listArr = Object.values(list).reverse();
  const articleList = document.getElementById("article_list");
  listArr.forEach(value => {
    const li = document.createElement("li");
    li.id = value.id;
    li.innerHTML = articleTemplate(list, value.id);
    articleList.appendChild(li);
  });
};

export default listComponent;
