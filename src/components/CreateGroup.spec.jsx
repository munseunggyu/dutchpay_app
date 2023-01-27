import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateGroup from "./CreateGroup";

const renderComponent = () => {
  render(<CreateGroup />);
  const input = screen.getByPlaceholderText("2022 제주도 여행");
  const saveButton = screen.getByText("저장");
  const errorMessage = screen.queryByText("그룹 이름을 입력해주세요.");

  return {
    input,
    saveButton,
    errorMessage,
  };
};

describe("그룹 생성 페이지", () => {
  test("그룹 이름 입력 컴포넌트가 렌더링 되었는가?", () => {
    const { input, saveButton } = renderComponent();

    // todo: input component
    expect(input).not.toBeNull();
    // todo: save button
    expect(saveButton).not.toBeNull();
  });
  test("그룹 이름을 입력하지않고 저장 버튼 클릭 시 에러 메시지를 노출", async () => {
    const { saveButton, errorMessage } = renderComponent();

    await userEvent.click(saveButton);

    expect(errorMessage).not.toBeNull();
  });
  test("그룹 이름을 입력 후, 저장 버튼을 클릭 시, 저장 성공 ", async () => {
    const { saveButton, input, errorMessage } = renderComponent();

    await userEvent.type(input, "예시 그룹 명");
    await userEvent.click(saveButton);

    expect(errorMessage).toBeNull();
  });
});
