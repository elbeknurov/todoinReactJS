import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "hghgh",
    },
  ]);
  const addTodoHnadler = () => {
    const newTodo = {
      id: Math.random().toString(),
      title: input,
    };
    setTodo([...todo, newTodo]);
    setInput("");
  };

  const deleteTodoHandler = (id) => {
    const result = todo.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodo(result);
    console.log(setTodo);
  };
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
            className="form-control"
            placeholder="Add something.."
          />
          <button
            onClick={addTodoHnadler}
            className="btn btn-primary form-control"
          >
            Add Todo
          </button>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {todo.map((item) => {
              return (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  <p>{item.title} </p>
                  <div>
                    <button className="btn btn-info mx-2">Edit</button>
                    <button
                      onClick={() => deleteTodoHandler(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
