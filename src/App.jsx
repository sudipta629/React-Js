import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItme1 from "./components/TodoItem1";
import TodoItme2 from "./components/TodoItem2";
import "./App.css";

function app() {
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <div className="todo-item">
        <TodoItme1 />
        <TodoItme2 />
      </div>
    </center>
  );
}

export default app;
