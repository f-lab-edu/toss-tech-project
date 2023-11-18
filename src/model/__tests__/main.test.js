import getMainList from "../main";
import mainList from "../../../__fixtures__/main.json";
import URL from "../url";
import { server } from "./server";

beforeAll(() => server(URL.main).listen());

test("getMainList 함수가 잘 동작하여 메인 리스트의 기사들을 성공적으로 받아오는지 확인", async () => {
  const result = await getMainList();
  expect(result).toEqual(mainList.articles);
});

afterAll(() => server(URL.main).close());
