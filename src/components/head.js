import react, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../reduex/modules/todo";
import { useSelector } from "react-redux";
import Input from "./input";

const Head = () => {
  const cards = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(cards);

  const addCardHandler = () => {
    let max = cards[0]?.id;
    if (max === undefined) {
      max = 0;
    }

    for (let i = 0; i < cards.length; i++) {
      let number = Number(cards[i].id);
      if (max < number) max = number;
    }

    dispatch(
      addTodo({
        id: String(max + 1),
        title: title,
        content: content,
        working: true,
      })
    );
    
    setTitle("");
    setContent("");
  };

  return (
    <Header>
      <InputContainer>
        <Input type={"text"} value={title} seting={setTitle}>
          제목
        </Input>
        <Input type={"text"} value={content} seting={setContent}>
          내용
        </Input>
      </InputContainer>
      <Buttonbox>
        <Button onClick={addCardHandler}>추가하기</Button>
      </Buttonbox>
    </Header>
  );
};
export default Head;

const Header = styled.header`
  background-color: #eee;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
const InputContainer = styled.div`
  display: flex;
  padding: 30px;
  gap: 10px;
`;
const Buttonbox = styled.div`
  padding: 30px;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
