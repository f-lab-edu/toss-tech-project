import "./index.css";

const titleTemplate = `
<section id="title_container">
    <div id="title_inner_container">
        <div id="development_container">
            <h1>개발</h1>      
        </div>
    </div>
</section>
`;

const titleComponenet = () => {
  const title = document.getElementById("title"); //Todo: JAE-37 티켓에서 app 레이아웃 구현 예정입니다.
  title.innerHTML = titleTemplate;
};

export default titleComponenet;
