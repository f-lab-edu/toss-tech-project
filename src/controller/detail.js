import detailPage from "../views/pages/detail"; //Todo: JAE-35 에서 만들어진 컴포넌트를 바탕으로 view 부분에서 화면에 연결할 예정입니다.
import { logoClick } from "./click";

function DetailController(router, model) {
  this.detailPage = async id => {
    try {
      const list = await model.mainList();
      const content = await model.detailContent(id);
      detailPage(list[id], content);
      logoClick(router);
    } catch (error) {
      if (import.meta.env.DEV)
        console.error(
          `디테일 컨트롤러를 통해 화면을 보여주는 부분에서 에러발생:${error}`,
        );
    }
  };
  router.addRoute("/detail/(\\w+)", this.detailPage);
}
export default DetailController;
