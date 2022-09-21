import React, {useState} from 'react'

const AddTodo = ({todo, setTodo}) => {
    const [value, setValue] = useState('')
    const saveTodo = () => {
        if (value !== '') {setTodo(
            [...todo, {
                id: Math.random(),
                title: value,
                status: true,
            }]
        )
            setValue('')}

    }
    return(
        <div>
            <input placeholder={'Enter the task'} value={value} onChange={ (e)=> setValue(e.target.value)}/>
            <button onClick={saveTodo}>Save</button>
        </div>
    )
}

export default  AddTodo