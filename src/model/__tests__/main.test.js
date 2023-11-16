import getMainData from "../main";
import mainData from "../../../__fixtures__/main.json";
import { rest } from "msw";
import { setupServer } from "msw/node";

const fixPath = "http://localhost/tossblog/v1";

const server = setupServer(
  rest.get(`${fixPath}/main`, (req, res, ctx) => {
    return res(ctx.json(mainData));
  }),
);

beforeAll(() => server.listen());

test("getMainData 함수가 잘 동작하여 데이터를 성공적으로 받아오는지 확인", async () => {
  const result = await getMainData();
  expect(result).toEqual(mainData.articles);
});

afterAll(() => server.close());
