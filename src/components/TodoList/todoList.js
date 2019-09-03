import React from "react";
import TodoListItem from "../TodoListItem";
import './TodoList.module.css';

const TodoList = ({ todos, onDeleted,
                  onToggleImportant,
                  onToggleDone }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem { ...itemProps }
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant}
                onToggleDone={() => onToggleDone}
                />
            </li>
        );
    });

    return (
        <ul className="list-group" className="todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;