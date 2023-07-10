import '../css/todosList.css';
import TodoItem from './todosItem';

function TodosList() {
    return (
        <section className='section_todos_list'>
            <ul className='todos_list'>
                <TodoItem />
            </ul>
        </section>
    );
}

export default TodosList;