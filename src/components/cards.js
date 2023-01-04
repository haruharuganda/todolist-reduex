import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomButton from "./customButton";

const ToDoList = ({ cards, deleteCardsHandler, finishCardsHandler }) => {
  return (
    <ContentBox key={cards.id}>
      <StLink to={`/${cards.id}`} key={cards.id}>
        <div>상세보기</div>
      </StLink>
      <h2>{cards.title}</h2>
      <div>{cards.content}</div>
      <Button>
        <CustomButton
          bordercolor="green"
          onClick={() => deleteCardsHandler(cards.id)}
        >
          삭제하기
        </CustomButton>

        <CustomButton
          ClassName="finish-button"
          bordercolor="red"
          onClick={() => finishCardsHandler(cards.id)}
          working={cards.working}
        >
          완료
        </CustomButton>
      </Button>
    </ContentBox>
  );
};

export default ToDoList;

const ContentBox = styled.div`
  width: 300px;
  border: 4px solid teal;
  border-radius: 10px;
  padding: 10px 24px 24px;
`;

const Button = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 5px;
`;
const StLink = styled(Link)`
  text-decoration: none;
`;
