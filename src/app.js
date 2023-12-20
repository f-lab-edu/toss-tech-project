import Router from "./router";
import Model from "./model";
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
  const router = new Router();
  const model = new Model();
  const hasController = initController(router, model);
  if (hasController) {
    router.start();
  }
})();
