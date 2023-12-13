import mainPage from "../views/pages/main"; //Todo: JAE-35 에서 만들어진 컴포넌트를 바탕으로 view 부분에서 화면에 연결할 예정입니다.
import { contentClick } from "./click";
import { logoClick } from "./click";

function MainController(router, model) {
  this.mainPage = async () => {
    try {
      const list = await model.mainList();
      mainPage(list);
      contentClick(router);
      logoClick(router);
    } catch (error) {
      if (import.meta.env.DEV)
        console.error(
          `메인 컨트롤러를 통해 화면을 보여주는 부분에서 에러발생:${error}`,
        );
    }
  };
  router.addRoute("/", this.mainPage);
}

export default MainController;
