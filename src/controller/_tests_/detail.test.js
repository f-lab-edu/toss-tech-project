import DetailController from "../detail";

const mockModel = {
  mainList: jest.fn().mockResolvedValue(["item1", "item2"]),
  detailContent: jest.fn().mockResolvedValue("detailContent"),
};

const mockRouter = {
  addRoute: jest.fn(),
};

const detailController = new DetailController(mockRouter, mockModel);

describe("디테일 컨트롤러가 정상적으로 작동하는지 테스트 하기", () => {
  test("디테일 페이지를 불러오는 메서드를 호출할시 모델의 데이터를 잘 받아와 보여지는지 확인", async () => {
    await detailController.detailPage(1);
    // 모델의 mainList 및 detailContent 메서드가 제대로 호출되었는지 확인
    expect(mockModel.mainList).toHaveBeenCalledTimes(1);
    expect(mockModel.detailContent).toHaveBeenCalledTimes(1);
  });
  test("라우터의 addRoute 메서드가 정상적으로 호출되는지 확인", () => {
    expect(mockRouter.addRoute).toHaveBeenCalledWith(
      "/detail/(\\w+)",
      expect.any(Function),
    );
  });
});
