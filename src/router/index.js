import { extractUrlParams } from "./extract-url-params";

const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";

export default function createRouter() {
  const routes = [];
  let notFound = () => {};

  const checkRoutes = () => {
    const { pathname } = window.location;
    const currentRoute = routes.find(route => {
      return route.testRegExp.test(pathname);
    });

    if (!currentRoute) {
      notFound();
      return;
    }
    const urlParams = extractUrlParams(currentRoute, pathname);

    currentRoute.render(urlParams);
  };

  const router = {
    /**
     *
     * @param {string} path - 특정 path를 문자열로 가져옵니다. 예: "/detail/:id"
     * @param {[object]} views - 객체를 배열 형태로 받아옵니다. 예: [{Controller:Main},{Controller:Detail}]
     * @returns {router} - addRoute, setNotFound, navigate, start를 메서드로 가지고 있는 router객체를 반환합니다.
     */
    addRoute(path, render) {
      const params = [];
      const pattern = path
        .replace(ROUTE_PARAMETER_REGEXP, (__, paramName) => {
          params.push(paramName);
          return URL_FRAGMENT_REGEXP;
        })
        .replace(/\//g, "\\/");

      routes.push({
        testRegExp: new RegExp(`^${pattern}`),
        render,
        params,
      });
      return this;
    },

    setNotFound(render) {
      notFound = render;
      return this;
    },

    navigate(path) {
      window.history.pushState(null, null, path);
      checkRoutes();
    },

    start() {
      checkRoutes();
      window.addEventListener("popstate", checkRoutes);
    },
  };

  return router;
}
