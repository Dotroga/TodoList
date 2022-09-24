import React, {useState} from 'react'

const TodoList = ({todo, setTodo, newTodo}) => {
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
            {newTodo.map(i => (
                <div key={i.id}>
                    {edit === i.id
                        ? <input value={value} onChange={(e)=> setValue(e.target.value)}/>
                        : <span>{i.title}</span>}
                    {edit === i.id
                        ? <button onClick={() => saveTodo(i.id)}>Save</button>
                        : <span>
                            <button onClick={() => editTodo(i.id, i.title)}>Edit</button>
                            <span>
                             {i.status === true
                                 ? <button onClick={() => statusTodo(i.id)}>Close</button>
                                 : <button onClick={() => statusTodo(i.id)}>Open</button>}
                            </span>
                            <button onClick={() => deleteTodo(i.id)}>Delete</button>
                        </span>}
                </div>))}
        </div>)
}

export default  TodoList