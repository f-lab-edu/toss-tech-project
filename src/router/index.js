class Router {
  constructor() {
    this.routes = [];
  }
  /**
   *
   * @param {string} pattern - 특정 pattern을 문자열로 가져옵니다. 예: '/' , '/detail/(\\w+)"
   * @param {function} page - 화면에 보여질 내용을 함수로 가져옵니다. Todo: //티켓: JAE-28에서 추후 구현 예정
   * @returns {new Router()}  - 생성할 라우터의 인스턴스를 반환합니다.
   */
  addRoute(pattern, page) {
    const regexString = new RegExp(`^${pattern}$`);
    this.routes.push({ regexString, page });
    return this;
  }

  setNotFound(page) {
    this.showNotFound = page;
    return this;
  }

  navigate(path) {
    let match;
    const currentRoute = this.routes.find(value => {
      match = path.match(value.regexString);
      if (match) {
        return true;
      }
    });

    if (!match) {
      this.showNotFound();
      return;
    }

    currentRoute.page(match[1]);
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
