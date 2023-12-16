// NotFoundController.test.js
import NotFoundController from "../not-found";

const mockRouter = {
  setNotFound: jest.fn(),
};

const notFoundController = new NotFoundController(mockRouter);

describe("페이지를 찾지 못하는 컨트롤러가 정상적으로 작동하는지 테스트 하기", () => {
  test("페이지를 찾지 못하는 메서드를 호출할시 라우터의 setNotFound 메서드가 정상적으로 호출되는지 확인", () => {
    notFoundController.notFoundPage();
    expect(mockRouter.setNotFound).toHaveBeenCalledWith(expect.any(Function));
  });
});
