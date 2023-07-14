import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  //   console.log(text)

  const handleTodo = () => {
    const newTodo = {
      title: text,
      status: false,
      id: new Date().toDateString + text,
    };
    setTodo([...todo, newTodo]);
    setText("");
  };
     
  const handleToggle=()=>{
    
  }

  return (
    <div className="todo">
      <div>
        <input
          type="text"
          placeholder="add task here"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleTodo}>add</button>
      </div>
      {
        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              {item.title}-{item.status ? "completed" : "notCompleted"}
              <button onClick={handleToggle}>toggle</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Todo;
