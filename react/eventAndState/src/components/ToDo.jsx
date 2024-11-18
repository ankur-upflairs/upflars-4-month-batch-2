import React from "react";
const initialToDo = ["hello", "bye"];

[
    {
        id:1,
        task:"hello"
    }
]
function ToDo() {
  const [todo, setTodo] = React.useState(initialToDo);

    function addToDo() {
        let newtodo=[...todo]
        newtodo.push("newTask added")
        setTodo(newtodo)
        // setTodo([...todo,'newTask added'])
    }
    function deleteToDo(index) {
        setTodo(todo.filter((item, i) => i !== index))
    }
  return (
    <>
      <button onClick={addToDo}>add new task</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}
          <button onClick={()=>deleteToDo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;
