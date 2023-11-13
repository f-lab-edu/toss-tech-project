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
    const showNotFound = jest.fn();
    const pageFunction = jest.fn();
    router.setNotFound(showNotFound);
    router.addRoute("/", pageFunction);
    router.navigate("/hello");

    expect(showNotFound).toHaveBeenCalled();
  });

  test("should return correct parameter when the match function works properly", () => {
    const pageFunction = jest.fn();
    const path = "/detail/2";
    router.addRoute("/detail/(\\w+)", pageFunction);
    const match = path.match(router.routes[0].regexString);

    expect(match[1]).toBe("2");
  });
});
