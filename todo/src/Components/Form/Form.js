import React from "react";

import "./Form.css";

function Form() {
  return (
    <form>
      <div>
        <label>Add new todo....</label>
        <div>
          <div class="inputbox">
            <input type="text" required="required" />
            <span>Add new todo task</span>
            <i></i>
          </div>
        </div>
        <button>
          <span className="box">Add todo</span>
        </button>
      </div>
    </form>
  );
}

export default Form;
