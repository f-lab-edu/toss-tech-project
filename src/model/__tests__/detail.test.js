import getDetailContent from "../detail";
import detailData from "../../../__fixtures__/detail.json";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { URL } from "../url";

const fixPath = "http://localhost";
const { DETAIL } = URL;

const server = setupServer(
  rest.get(`${fixPath}${DETAIL}/1`, (req, res, ctx) => {
    return res(ctx.json(detailData[1]));
  }),
);

beforeAll(() => server.listen());

test("getDetailContent 함수가 잘 동작하여 상세내용을 성공적으로 받아오는지 확인", async () => {
  const result = await getDetailContent(1);
  expect(result).toEqual(detailData[1]);
});

afterAll(() => server.close());
