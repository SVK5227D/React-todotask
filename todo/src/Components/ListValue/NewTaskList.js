// import React from "react";

import RenderListValue from "./ListRenderValue";
import "./NewTask.css";

function ListRender(props) {
  
  return (
    props.items.map((todoValueSend) => (
      <RenderListValue
        checkBox = {todoValueSend.checkBox}
        todoValue = {todoValueSend.todoValue}
      />
    ))
  );
}

export default ListRender;
