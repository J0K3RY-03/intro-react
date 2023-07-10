import '../css/form.css'
import React, { useState } from 'react';



function InputCreateTodos() {
    const [todo, setTodo] = useState('');
    return (
        <form className='form_create_todos'>
            <input type="text" name="create_todos" id="input_create_todos" placeholder='type a new todo' 
            value = {todo}
            onChange = {e => setTodo(e.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    );
}


export default InputCreateTodos;