import CreateRouter from "./router";
import CreateModel from "./model";
import initController from "./controller";
import "./index.css";

(() => {
  const appTemplate = `
  <div id="header"></div>
  <div id="main"></div>
  <div id="footer"></div>
`;
  const app = document.getElementById("app");
  app.innerHTML = appTemplate;
  const router = new CreateRouter();
  const model = new CreateModel();
  const hasController = initController(router, model);
  if (hasController) {
    router.start();
  }
})();
