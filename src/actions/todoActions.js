import {FETCH_TODOS, ADD_TODO} from './actionTypes';

export const fetchTodos = () => dispatch => {

    dispatch({
        type: FETCH_TODOS
    });

}

export const addTodo = (todo) => dispatch => {
    
    dispatch({
        type: ADD_TODO,
        todo
    });
    
}