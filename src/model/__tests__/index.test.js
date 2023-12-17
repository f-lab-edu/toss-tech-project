import getMainList from "../main";
import getDetailContent from "../detail";
import Model from "..";
import { URL } from "../constant";
import { server } from "./server";

beforeAll(() => server(URL.main).listen());

test("id가 1인 articleItem메서드를 호출하였을때 그에 맞게 데이터를 병렬처리하여 올바르게 받아오는지 확인", async () => {
  const model = new Model();
  const result = await model.articleItem(1);

  const mainList = await getMainList();
  const detailData = await getDetailContent(1);
  expect(result).toEqual({
    ...mainList[1],
    detailContent: detailData,
  });
});

afterAll(() => server(URL.main).close());
