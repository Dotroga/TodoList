import React, {useState} from 'react'

const TodoList = ({todo, setTodo}) => {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
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
    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)
    }
    const saveTodo = (id) => {
        let newTodo = [...todo].map(i => {
            if (i.id === id) {
                i.title = value
            }
            return i
        })
        setTodo(newTodo)
        setEdit(null)
    }
    return (
        <div>
            {todo.map(i => (
                <div key={i.id}>
                    {edit === i.id ?
                        <div>
                            <input value={value} onChange={(e)=> setValue(e.target.value)}/>
                        </div>
                        : <div>{i.title}</div>}
                    {edit === i.id ?
                        <div>
                            <button onClick={() => saveTodo(i.id)}>Save</button>
                        </div> :
                        <div>
                            <button onClick={() => editTodo(i.id, i.title)}>Edit</button>
                            <span>
                             {i.status === true
                                 ? <button onClick={() => statusTodo(i.id)}>Close</button>
                                 : <button onClick={() => statusTodo(i.id)}>Open</button>}
                            </span>
                            <button onClick={() => deleteTodo(i.id)}>Delete</button>
                        </div>
                    }
                </div>
            ))
            }
        </div>
    )
}

export default  TodoList