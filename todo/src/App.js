import React, { useState } from "react";

import FormValue from "./Components/Form/Form";
import ListRender from "./Components/ListValue/NewTaskList";
import './App.css'

const todoList = [];

function App() {
  const [todoListValue, setTodoListValue] = useState(todoList);
  const addTodoHandler = (todo) => {
    setTodoListValue((prevTodo) => {
      return [todo, ...prevTodo];
    });
  };
  console.log("App js file value check");
  console.log(todoListValue);
  return (
    <div>
      <h3 className="titielApplication">Todo List</h3>
      <FormValue onAddTodo={addTodoHandler} />
      <ListRender items={todoListValue} /> 
    </div>
  );
}

export default App;
