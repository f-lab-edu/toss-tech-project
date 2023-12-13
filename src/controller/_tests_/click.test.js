import { contentClick } from "../click";
import { logoClick } from "../click";

const mockRouter = {
  navigate: jest.fn(),
};

document.body.innerHTML = `
<header>
    <div id="header_logo_container">
<header>
<main>
    <ul>
        <li id="1">List 1</li>
        <li id="2">List 2</li>
        <li id="3">List 3</li>
    </ul>
</main>
      `;

describe("클릭하였을때 정상적으로 눌러졌는지 테스트 하기", () => {
  test("main에서 id가 1인 리스트를 클릭 시 router.navigate가 정상적으로 호출되어 url이 /detail/1로 변경되는지 확인", () => {
    const list1 = document.getElementById("1");
    contentClick(mockRouter);
    list1.click();
    expect(mockRouter.navigate).toHaveBeenCalledWith("/detail/1");
  });
  test("header에서 로고 클릭 시 router.navigate가 정상적으로 호출되어 url이 /로 변경되는지 확인", () => {
    const headerLogoContainer = document.getElementById(
      "header_logo_container",
    );
    logoClick(mockRouter);
    headerLogoContainer.click();
    expect(mockRouter.navigate).toHaveBeenCalledWith("/");
  });
});
