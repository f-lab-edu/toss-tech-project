import { fixPath } from "./fix-path";
import { setupServer } from "msw/node";
import mainList from "../../../__fixtures__/main.json";
import articleContent from "../../../__fixtures__/detail.json";
import { rest } from "msw";
import URL from "../url";

const createMockServerHandler = (path, responseData) =>
  rest.get(fixPath + path, (req, res, ctx) => res(ctx.json(responseData)));

const createMockServer = path => {
  switch (path) {
    case URL.main:
      return createMockServerHandler(URL.main, mainList);
    case URL.detail:
      return createMockServerHandler(`${URL.detail}/2`, articleContent[2]);
    default:
      return null;
  }
};

export const server = path => setupServer(createMockServer(path));
