import getDetailData from "../detail";
import detalData from "../../../__fixtures__/detail.json";
import { rest } from "msw";
import { setupServer } from "msw/node";

const fixPath = "http://localhost/tossblog/v1";

const server = setupServer(
  rest.get(`${fixPath}/detail/2`, (req, res, ctx) => {
    return res(ctx.json(detalData[2]));
  }),
);

beforeAll(() => server.listen());

test("getDetailData 함수가 잘 동작하여 데이터를 성공적으로 받아오는지 확인", async () => {
  const result = await getDetailData(2);
  expect(result).toEqual(detalData[2]);
});

afterAll(() => server.close());
