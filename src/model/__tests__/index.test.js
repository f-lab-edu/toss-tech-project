import axios from "axios";

import Model from "..";

jest.mock("axios");

describe("Model 생성자 함수가 올바르게 작동되는지 테스트 하기", () => {
  test("mainData 메서드가 올바르게 동작하여 데이터들을 잘 받아오는지 확인하는 테스트", async () => {
    const mockData = { data: { articles: ["list1", "list2"] } };
    axios.get.mockResolvedValue(mockData);

    const modelInstance = new Model();
    const result = await modelInstance.mainData();
    expect(result).toEqual(mockData.data.articles);
  });
  test("detailData 메서드가 올바르게 동작하여 데이터들을 잘 받아오는지 확인하는 테스트", async () => {
    const id = "1";

    const mockData = { data: { detail: `detail data for id ${id}` } };
    axios.get.mockResolvedValue(mockData);

    const modelInstance = new Model();
    const result = await modelInstance.detailData(id);
    expect(result).toEqual(mockData.data);
  });
});
