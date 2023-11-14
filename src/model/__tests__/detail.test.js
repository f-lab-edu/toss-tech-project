import axios from "axios";
import getDetailData from "../detail";

jest.mock("axios");

describe("getDetailData 함수가 올바르게 작동되는지 테스트 하기", () => {
  test("mock데이터 안에 들어있는 데이터들을 올바른 api로 요청하였을경우 잘 받아오는지 확인하는 테스트.", async () => {
    const id = "1";
    const mockData = { data: { detail: `Detail data for id ${id}` } };
    axios.get.mockResolvedValue(mockData);
    const result = await getDetailData(id);

    expect(axios.get).toHaveBeenCalledWith(`/detail/${id}`);
    expect(result).toEqual(mockData.data);
  });
});
