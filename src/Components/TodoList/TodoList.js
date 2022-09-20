import React from 'react'

const TodoList = ({todo, setTodo}) => {
    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(i => i.id !== id)
        setTodo(newTodo)
    }
    const statusTodo = (id) => {
        let newTodo = [...todo].filter(i => {
            if (i.id === id) {
                i.status = !i.status
            }
            return i
        })
        setTodo(newTodo)
    }
    return(
        <div>
            {
                todo.map(i =>(
                    <div key={i.id}>{i.title}
                        <button onClick={ () => deleteTodo(i.id)}>Удалить</button>
                        <span>
                             { i.status === true
                             ? <button onClick={ () => statusTodo(i.id)}>Зыкрыть</button>
                             : <button onClick={ () => statusTodo(i.id)}>Открыть</button>}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default  TodoList