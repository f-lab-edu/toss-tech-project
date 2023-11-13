import Router from "..";

describe("Rourer", () => {
  let router;

  beforeEach(() => {
    router = new Router();
  });

  test("should verify that the addRoute method works properly", () => {
    const pageFunction = jest.fn();
    router.addRoute("/", pageFunction);
    router.addRoute("/detail/(\\w+)", pageFunction);

    expect(router.routes.length).toBe(2);
    expect(router.routes[0].regexString).toEqual(/^\/$/);
    expect(router.routes[1].regexString).toEqual(/^\/detail\/(\w+)$/);
    expect(router.routes[0].page).toBe(pageFunction);
    expect(router.routes[1].page).toBe(pageFunction);
  });

  test("should verify that the showNotFound function is working properly", () => {
    const notFoundFunction = jest.fn();
    const pageFunction = jest.fn();
    router.setNotFound(notFoundFunction);
    router.addRoute("/", pageFunction);
    router.navigate("/hello");
    expect(notFoundFunction).toHaveBeenCalled();
  });

  test("should return correct parameter when the navigate method works properly", () => {
    const pageFunction = jest.fn();

    router.addRoute("/detail/(\\w+)", pageFunction);
    router.navigate("/detail/3");
    const match = "/detail/3".match(/^\/detail\/(\w+)$/);

    expect(match[1]).toBe("3");
  });
});
