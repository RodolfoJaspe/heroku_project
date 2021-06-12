import React from 'react';
import Todo from './Todo';
import localStorage from 'local-storage';

function TodoList (props) {
    return (
        <div>
        {props.todos.map(todo => 
            <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
            )} 
        </div>
    )
}
export default TodoList

