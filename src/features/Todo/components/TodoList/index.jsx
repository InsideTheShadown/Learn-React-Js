import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList : PropTypes.array,
};

TodoList.defaultProps = {
    todoList : [],
};

function TodoList({todoList}) {
    // hoặc const todoList = props.todoList; hoặc const {todoList} = props;
    return (
        <ul>
            {todoList.map(todo => (
                <li key = {todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

export default TodoList;