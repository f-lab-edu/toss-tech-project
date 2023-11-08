import { extractUrlParams } from "../extract-url-params";

describe("extractUrlParams", () => {
  it("should return an undefined when route has no parameters", () => {
    const route = {
      params: [],
      testRegExp: /^\/$/,
    };
    const pathname = "/";
    const result = extractUrlParams(route, pathname);
    expect(result).toEqual(undefined);
  });

  it("should extract URL parameters correctly in object when route has parameter", () => {
    const route = {
      params: ["id"],
      testRegExp: /^\/detail\/([^\\/]+)$/,
    };
    const pathname = "/detail/12";
    const result = extractUrlParams(route, pathname);
    expect(result).toEqual({
      id: "12",
    });
  });

  it("should return an undefined when handle wrong matches", () => {
    const route = {
      params: [],
      testRegExp: /^\/detail$/,
    };
    const pathname = "/detail-path";
    const result = extractUrlParams(route, pathname);
    expect(result).toEqual(undefined);
  });
});
