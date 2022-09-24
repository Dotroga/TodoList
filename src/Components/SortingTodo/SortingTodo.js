import React, {useEffect, useState} from 'react'
import TodoList from "../TodoList/TodoList";

const SortingTodo = ({todo, setTodo}) => {
    const [newTodo, setNewTodo] = useState(todo)
    const todoFilter = (status) => {
        if (status === 'all') {
            setNewTodo(todo)
        } else {
            let copy = [...todo].filter(i =>
                i.status === status)
            setNewTodo(copy)
        }
    }
    useEffect(()=>{
        setNewTodo(todo)
    }, [todo])
    return (
        <div>
            <button onClick={()=>todoFilter('all')}>All</button>
            <button onClick={()=>todoFilter(true)}>Open</button>
            <button onClick={()=>todoFilter(false)}>Closed</button>
            <TodoList todo={todo} newTodo={newTodo} setTodo={setTodo}/>
        </div>
    )
}
export default SortingTodo