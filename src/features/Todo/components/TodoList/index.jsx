import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList : PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList : [],
    onTodoClick: null,
};

function TodoList({todoList, onTodoClick}) {
    // hoặc const todoList = props.todoList; hoặc const {todoList} = props;
    const handleClick = (todo, idx) => {
        if(!onTodoClick) return;
        onTodoClick(todo,idx);
    };
    return (
        <ul className = "todo-list">
            {todoList.map((todo,idx) => (
                <li 
                    className = {classNames({
                        'todo-item': true,
                        completed: todo.status === 'completed',
                    })} 
                    key = {todo.id} onClick = {() => handleClick(todo,idx)}>
                {todo.title}
                </li>
            ))}
            
        </ul>
    );
};

export default TodoList;