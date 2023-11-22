import { setupServer } from "msw/node";
import mainList from "../../../__fixtures__/main.json";
import articleContent from "../../../__fixtures__/detail.json";
import { rest } from "msw";
import { URL } from "../constant";
import { FIX_PATH } from "../constant";

const createMockServerHandler = (path, data) =>
  rest.get(FIX_PATH + path, (req, res, ctx) => res(ctx.json(data)));

const createMockServer = (path, id) => {
  switch (path) {
    case URL.main:
      return createMockServerHandler(URL.main, mainList);
    case URL.detail:
      return createMockServerHandler(`${URL.detail}/${id}`, articleContent[id]);
    default:
      return null;
  }
};

export const server = (path, id) => setupServer(createMockServer(path, id));
