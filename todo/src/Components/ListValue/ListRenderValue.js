import "./RenderList.css";
import Card from "../Card/Card";

function RenderListValue(props) {
  console.log("ListRender file .......");
  console.log(props.todoValue);
  console.log(props.checkBox);
  return (
    <Card className="listCard">
      <div className="ListContainer">
        <input type="checkbox" value={props.checkBox}></input>
        <h2 className="todoValue">{props.todoValue}</h2>
      </div>
    </Card>
  );
}

export default RenderListValue;
