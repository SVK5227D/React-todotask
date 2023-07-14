import React, { useState } from "react";

import "./Form.css";

function FormValue(dataSend) {
  const [todoInputTaskValue, setTodoInputTaskValue] = useState("");

  const todoTaskHandler = (event) => {
    setTodoInputTaskValue(event.target.value);
  };

  function submitHandler(event) {
    console.log("value in formnjABJF");
    console.log(todoInputTaskValue);
    event.preventDefault();
    if(todoInputTaskValue.trim().length === 0){
      return
    }
    const todoListValue = {
      checkBox: false,
      todoValue: todoInputTaskValue,
    };
    console.log(todoListValue);
    dataSend.onAddTodo(todoListValue);
    setTodoInputTaskValue("");
  }

  return (
    <form className="formView" onSubmit={submitHandler}>
      <div className="input-container">
        <input
          placeholder="Enter your todo"
          className="input-field"
          type="text"
          value={todoInputTaskValue}
          onChange={todoTaskHandler}
        />
        <label className="input-label">Todo input</label>
        <span className="input-highlight"></span>
      </div>
      <button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="18"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>{" "}
          Add task
        </span>
      </button>
    </form>
  );
}

export default FormValue;
