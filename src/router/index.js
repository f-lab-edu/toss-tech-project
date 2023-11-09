class Router {
  constructor() {
    this.routes = [];
  }
  /**
   *
   * @param {string} path - 특정 path를 문자열로 가져옵니다. 예: "/main"
   * @param {function} render - 화면에 보여질 내용을 함수로 가져옵니다. Todo: //티켓: JAE-28에서 추후 구현 예정
   * @returns {new Router()}  - 생성할 라우터의 인스턴스를 반환합니다.
   */
  addRoute(pattern, render) {
    const regexString = new RegExp(`^${pattern}$`);
    this.routes.push({ regexString, render });
    return this;
  }

  setNotFound(render) {
    this.unmatchedRoute = render;
    return this;
  }

  navigate(path) {
    const currentRoute = this.routes.find(value =>
      value.regexString.test(path),
    );
    if (!currentRoute) {
      this.unmatchedRoute();
      return;
    }
    const params = path.match(currentRoute.regexString);
    currentRoute.render(params[1]);
  }

  start() {
    window.addEventListener("DOMContentLoaded", () => {
      this.navigate(window.location.pathname);
    });
    window.addEventListener("popstate", () => {
      this.navigate(window.location.pathname);
    });
  }
}

export default Router;
