import styled from "styled-components";

import Navigation from "./navigation";
import Head from "./head";
import ToDoListsCards from "./toDoListsCards";

//TodoList의 전체적인 컴포넌트 틀
function ToDo() {
  return (
    <App>
      <Container>
        <Navigation />
        <Head />
        <ToDoListsCards />
      </Container>
    </App>
  );
}

export default ToDo;

const App = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
`;
