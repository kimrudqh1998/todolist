import React, {useState} from "react";
import Timer from "./TodoMain";
import TodoItem from "./TodoItem"
import TodoCreate from "./TodoCreate"
import './index.css';

function App() {

  const [todos, setTodos] = useState([])
  const [nextId, setNextId] = useState(0);
  const [compTodos, setCompTodos] = useState(0);

  const handleCreate = (newTodo) => {
      newTodo.id = nextId;
      setNextId(nextId + 1);
      setTodos([...todos,newTodo]);
      if(newTodo.status){
        setCompTodos(compTodos+1);
      }
  };

  const todoCount = todos.length;

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const handleEdit = (id, newName) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setTodos(updatedTodos);
  };


  return (
    <div className="App"
        style={{backgroundColor : "#00BD9D", border: "1px", width:"450px", borderRadius:"20px", 
        justifyContent:"center",margin:'auto', textAlign: "center"}}
    >
      <header className="Time">
        <h1>TodoList</h1>
        <p>
          <Timer />
        </p>
        </header>
        <body>
          <p><b>남은 할 일:{todoCount}</b></p>
          <div className="centerbox"
            style={{backgroundColor:"#218380", textAlign:"left", width:"400px", height:"auto", minHeight:"450px", borderRadius:"20px", justifyContent:"center", margin:"auto"}}>
              <div style={{width:"380px", height:"auto",justifyContent:"center", margin:"auto", fontSize:"30px"}}>             
                  {todos.map(todo => (
                  <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onEdit={handleEdit} />
                  ))}                
              </div>
          </div>
        </body>
        <footer>
          <div>
            <TodoCreate onCreate={handleCreate}/>
          </div>
        </footer>
    </div>
  );
}

export default App;
