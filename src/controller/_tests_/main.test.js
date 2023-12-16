import MainController from "../main";

const mockModel = {
  mainList: jest.fn().mockResolvedValue(["item1", "item2"]),
};

const mockRouter = {
  addRoute: jest.fn(),
};

const mainController = new MainController(mockRouter, mockModel);

describe("메인 컨트롤러가 정상적으로 작동하는지 테스트 하기", () => {
  test("메인 페이지를 불러오는 메서드를 호출할시 모델의 데이터를 잘 받아와 보여지는지 확인", async () => {
    await mainController.mainPage();
    expect(mockModel.mainList).toHaveBeenCalledTimes(1);
  });
  test("라우터의 addRoute 메서드가 정상적으로 호출되는지 확인", () => {
    expect(mockRouter.addRoute).toHaveBeenCalledWith("/", expect.any(Function));
  });
});
