import getMainList from "../main";
import mainData from "../../../__fixtures__/main.json";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { URL } from "../url";

const fixPath = "http://localhost";
const { MAIN } = URL;

const server = setupServer(
  rest.get(fixPath + MAIN, (req, res, ctx) => {
    return res(ctx.json(mainData));
  }),
);

beforeAll(() => server.listen());

test("getMainList 함수가 잘 동작하여 메인 리스트를 성공적으로 받아오는지 확인", async () => {
  const result = await getMainList();
  expect(result).toEqual(mainData.articles);
});

afterAll(() => server.close());
