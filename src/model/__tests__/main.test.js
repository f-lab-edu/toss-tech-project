import axios from "axios";
import getMainData from "../main";

jest.mock("axios");

describe("getMainData 함수가 올바르게 작동되는지 테스트 하기", () => {
  test("mock데이터 안에 들어있는 데이터들을 올바른 api로 요청하였을경우 잘 받아오는지 확인하는 테스트.", async () => {
    const mockData = { data: { articles: ["list1", "list2"] } };
    axios.get.mockResolvedValue(mockData);
    const result = await getMainData();

    expect(axios.get).toHaveBeenCalledWith("/main");
    expect(result).toEqual(mockData.data.articles);
  });
});
