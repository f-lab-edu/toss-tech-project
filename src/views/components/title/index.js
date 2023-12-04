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
  const title = document.getElementById("title");
  title.innerHTML = titleTemplate;
};

export default titleComponenet;
