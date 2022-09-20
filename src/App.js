import React, {useState} from 'react'
import './App.css';
import Header from "./Components/AddTodo/Header";
import AddTodo from "./Components/Header/AddTodo";
import TodoList from "./Components/TodoList/TodoList";

function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'First todo',
            status: true,
        },
        {
            id: 2,
            title: 'Second todo',
            status: false,
        },
        {
            id: 3,
            title: 'Third todo',
            status: true,
        },
    ])
  return (<div>
        <Header/>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
  </div>)
}

export default App;
