/**
 *
 * @param {object} route - testRegExp, views, params 이렇게 3개의 프로퍼티를 가진 객체 입니다.
 * @param {string} pathname -window.location.pathname을 통해 문자열 형태로 가져옵니다.
 * @returns {object} - {id:number} 형태인 객체로 반환합니다.
 */

export const extractUrlParams = (route, pathname) => {
  const params = {};
  if (route.params.length === 0) {
    return;
  }
  const matches = pathname.match(route.testRegExp);
  matches.forEach(paramValue => {
    const paramName = route.params[0];
    params[paramName] = paramValue;
  });
  return params;
};
