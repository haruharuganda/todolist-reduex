import "./App.css";
import { useSelector } from "react-redux";
import Pages from "./Page/Page";
function App() {
  const todoStore = useSelector((state) => state);
  console.log(todoStore.todo);
  console.log(Array.isArray(todoStore.todo.todo));
  return <Pages />;
}

export default App;
