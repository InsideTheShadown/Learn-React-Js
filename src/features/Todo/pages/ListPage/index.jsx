import React, {useEffect, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
import { NewReleases } from '@material-ui/icons';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList = [
        {
            id:1,
            title: 'Eat',
            status: 'new',
        },
        {
            id:2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id:3,
            title: 'Code',
            status: 'new',
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [fillteredStatus, setFillteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(location,history,match);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFillteredStatus(params.status || 'all');
    }, [location.search])

    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];
        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status : newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        //update todo list
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        // setFillteredStatus('all');
        const queryParams = {status: 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };

    const handleShowCompletedClick = () => {
        // setFillteredStatus('completed');
        const queryParams = {status: 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };

    const handleShowNewClick = () => {
        // setFillteredStatus('new');
        const queryParams = {status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => fillteredStatus === 'all' || fillteredStatus === todo.status);
    }, [todoList, fillteredStatus]);

    const handleTodoFormSubmit = (data) => {
        const newTodo = {
            id: todoList.length+1,
            title: data.title,
            status: 'new',
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };
    
    return (
        <div>
            <h3>Create new todo</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}  />
            <h3>Todo List</h3>
            <TodoList onTodoClick = {handleTodoClick} todoList={renderedTodoList} />
            <div>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;