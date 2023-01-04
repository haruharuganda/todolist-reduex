import styled from "styled-components";
import ToDoList from "./cards";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../reduex/modules/todo";

const ToDoListsCards = () => {
  const dispacth = useDispatch();
  const cards = useSelector((state) => state.todo.todo);

  const deleteCardsHandler = (id) => {
    dispacth(deleteTodo(id));
  };

  const finishCardsHandler = (id) => {
    dispacth(toggleStatusTodo(id));
  };

  return (
    <Body>
      <h2>Working.. 🔥</h2>
      <List>
        {cards.map((cards) => {
          if (cards.working) {
            return (
              <ToDoList
                cards={cards}
                key={cards.id}
                deleteCardsHandler={deleteCardsHandler}
                finishCardsHandler={finishCardsHandler}
              />
            );
          } else return null;
        })}
      </List>

      <h2>Done..! 🎉</h2>
      <List>
        {cards.map((cards) => {
          if (!cards.working) {
            return (
              <ToDoList
                cards={cards}
                key={cards.id}
                deleteCardsHandler={deleteCardsHandler}
                finishCardsHandler={finishCardsHandler}
              />
            );
          } else return null;
        })}
      </List>
    </Body>
  );
};
export default ToDoListsCards;

const Body = styled.main`
  display: block;
  padding: 0 24px;
`;

const List = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
