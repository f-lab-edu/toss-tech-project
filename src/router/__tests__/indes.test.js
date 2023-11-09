import Router from "..";

const renderFunction = jest.fn();

describe("Router", () => {
  let router;

  beforeEach(() => {
    router = new Router();
  });

  it("should add a route to the router", () => {
    router.addRoute("/", renderFunction);
    expect(router.routes).toHaveLength(1);
  });

  it("should set a not found route for the router", () => {
    router.setNotFound(renderFunction);
    expect(router.unmatchedRoute).toBeDefined();
  });

  it("should return correct parameter", () => {
    router.addRoute("/detail/(\\w+)", renderFunction);
    const path = "/detail/3";
    router.navigate(path);
    expect(renderFunction).toHaveBeenCalledTimes(1);
    const params = path.match(/^\/detail\/(\w+)$/);
    expect(params[1]).toBe("3");
  });
});
