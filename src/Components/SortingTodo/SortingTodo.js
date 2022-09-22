import React, {useEffect, useState} from 'react'
import TodoList from "../TodoList/TodoList";

const SortingTodo = ({todo, setTodo}) => {
    let newTodo = [...todo]
    const todoFilter = (status) => {
        if (status === 'all') {
            newTodo = todo
        } else {
            newTodo = [...todo].filter(i =>
                i.status === status)
        }
        return console.log(newTodo)
    }
    return (
        <div>
            <button onClick={()=>todoFilter('all')}>All</button>
            <button onClick={()=>todoFilter(true)}>Open</button>
            <button onClick={()=>todoFilter(false)}>Closed</button>
            <TodoList todo={newTodo} setTodo={setTodo}/>
        </div>
    )
}
export default SortingTodo