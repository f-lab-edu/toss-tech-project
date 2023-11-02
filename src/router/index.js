import Main from "../view/page/main";
import Detail from "../view/page/detail";
import notFound from "../view/page/not-found";

export const root = document.querySelector("#app");

export const routes = [
  { path: "/", Controller: Main },
  { path: "/detail/:id", Controller: Detail },
];

export const pathToRegex = path =>
  new RegExp(`^${path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")}$`);

export const render = (path, param) => {
  const matchedRoutes = routes.map(route => {
    const isMatch = path.match(pathToRegex(route.path));

    return { route, isMatch };
  });

  const match = matchedRoutes.find(
    matchedRoute => matchedRoute.isMatch !== null,
  );

  return match ? new match.route.Controller(root, param) : new notFound(root);
};

export const navigate = (path, param) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", window.location.origin + path);
    render(path, param);
  }
};

export const start = () => {
  window.addEventListener("DOMContentLoaded", () => {
    render(window.location.pathname);
  });

  window.addEventListener("popstate", () => {
    render(window.location.pathname);
  });
};
