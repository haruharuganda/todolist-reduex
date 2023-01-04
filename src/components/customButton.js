import styled from "styled-components";

function CustomButton({ bordercolor, onClick, children, working }) {
  let text = children;
  if (!working && text === "완료") {
    text = "취소";
  }
  return (
    <Button bordercolor={bordercolor} onClick={onClick}>
      {text}
    </Button>
  );
}

export default CustomButton;

const Button = styled.button`
  padding: 10px;
  width: 130px;
  border-radius: 10px;
  background-color: transparent;

  border: solid ${({ bordercolor }) => bordercolor};
`;
