import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <Text>
        <div className="myTodo">My Todo List</div>
        <div className="React">React</div>
      </Text>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  position: relative;
`;

const Text = styled.div`
  display: block;
  width: 97%;
  display: flex;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  justify-content: space-between;

  padding: 30px;
`;
