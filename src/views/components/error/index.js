import "./index.css";

const errorTemplate = `
<section id="error_container">
    <div id="error_inner_container">
        <div id="notfound_container">
            <h1>페이지를 찾을수 없습니다.</h1>      
        </div>
    </div>
</section>
`;

const errorComponent = () => {
  const main = document.getElementById("main"); //Todo: JAE-37 티켓에서 app 레이아웃 구현 예정입니다.
  main.innerHTML = errorTemplate;
};

export default errorComponent;
