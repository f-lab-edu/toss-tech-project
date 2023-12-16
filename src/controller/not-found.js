import notFoundPage from "../views/pages/not-found"; //Todo: JAE-35 에서 만들어진 컴포넌트를 바탕으로 view 부분에서 화면에 연결할 예정입니다.
import { addClickEventToLogo } from "./click";

function NotFoundController(router) {
  this.notFoundPage = () => {
    try {
      notFoundPage();
      addClickEventToLogo(router);
    } catch (error) {
      if (import.meta.env.DEV)
        console.error(
          `페이지를 찾지 못하는 컨트롤러를 통해 화면을 보여주는 부분에서 에러발생:${error}`,
        );
    }
  };
  router.setNotFound(this.notFoundPage);
}

export default NotFoundController;
