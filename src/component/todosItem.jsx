import '../css/todosItem.css';

const TodoItem = () => {
    return (
        <>
            <li className='todos_item_list'>
                <input type="checkbox" name="checkbox_todo" id="checkbox_todo" />
                <p className="todo_value">Faire à manger</p>
            </li>
            <li className='todos_item_list'>
                <input type="checkbox" name="checkbox_todo" id="checkbox_todo" />
                <p className="todo_value">Faire le ménage</p>
            </li>
        </>
    )
}

export default TodoItem;