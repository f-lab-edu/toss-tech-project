import { extractUrlParams } from "./extract-url-params";
const ROUTE_PARAMETER_REGEXP = /:(\w+)/g; //:id path parameter를 매칭하기 위한 정규 표현식
const URL_FRAGMENT_REGEXP = "([^\\/]+)";
const TICKTIME = 250;

export default function createRouter() {
  const routes = []; //애플리케이션의 경로 목록들을 담을 배열
  let notFound = () => {};

  const checkRoutes = () => {
    //라우터 기능1: 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
    const { pathname } = window.location;

    const currentRoute = routes.find(route => {
      return route.testRegExp.test(pathname);
    });

    if (!currentRoute) {
      notFound();
      return;
    }

    const urlParams = extractUrlParams(currentRoute, pathname);

    currentRoute.views(urlParams);
  };

  const router = {
    //라우터 기능2: 애플리케이션의 경로 목록들을 저장한다.
    addRoute(path, views) {
      const params = [];

      const pattern = path
        .replace(ROUTE_PARAMETER_REGEXP, (__, paramName) => {
          params.push(paramName); //path parameter이름을 추출하여 배열에 넣어준다. ["id"];
          return URL_FRAGMENT_REGEXP; //path parameter에 매치되는 문자를 URL_REGEXP로 치환
        })
        .replace(/\//g, "\\/"); // "/"의 텍스트로써 사용을 위해 모든 "/" 앞에 이스케이프 문자("\")를 추가해줍니다.

    
      routes.push({
        testRegExp: new RegExp(`^${pattern}$`),
        views,
        params,
      });
      
      return this;
    },

    //라우터 기능3: 라우터에 매핑하지 못하였을 경우
    setNotFound(views) {
      notFound = views;
      return this;
    },

    //라우터 기능4: 네비게이트
    navigate(path) {
      window.history.pushState(null, null, path);
    },

    //라우터 기능5: 실행
    start() {
      checkRoutes();
      window.setInterval(checkRoutes, TICKTIME);
    },
  };

  return router;
}
