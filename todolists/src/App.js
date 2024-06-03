import "./App.css";
import { useState } from "react";

function App() {
  let [todoList, setTodoList] = useState([]);

  let saveToDoList = (event) => {
    let todoname = event.target.toname.value;

    if (!todoList.includes(todoname)) {
      let finalTodoList = [...todoList, todoname];
      setTodoList(finalTodoList);
    } else {
      alert("duplicate List");
    }

    event.preventDefault();
  };

  let item = todoList.map((values, index) => {
    return (
      <TodoListItem
        value={values}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname"></input> <button>Save</button>
      </form>

      <div className="outerdiv">
        <ul>{item}</ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItem({ value, indexNumber, todoList, setTodoList }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todoList.filter((value, index) => index != indexNumber);
    setTodoList(finalData);
  };

  let checkStatus=()=>{
    setStatus(!status);

  }

  return (
    <li className={(status)? ' completetodo': ''}
    onClick={checkStatus}>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
