import MainController from "./main";
import DetailController from "./detail";
import NotFoundController from "./not-found";

const initController = (router, model) => {
  const main = new MainController(router, model);
  const detail = new DetailController(router, model);
  const notFound = new NotFoundController(router);
  if (main && detail && notFound) return true;
  return false;
};

export default initController;
