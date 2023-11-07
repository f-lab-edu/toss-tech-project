export const extractUrlParams = (route, pathname) => {
    if (route.params.length === 0) {
      return {};
    }
    const params = {};
  
    const matches = pathname.match(route.testRegExp);
    matches.shift(); //배열의 첫번째 값에는 url 전체가 담겨있으므로 제거해줍니다.
    matches.forEach((paramValue, index) => {
      const paramName = route.params[index];
      params[paramName] = paramValue;
    });
  
    return params;
  };
  