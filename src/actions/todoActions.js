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

    let formdata = new FormData();
    formdata.append("todo", todo);

    fetch("http://localhost:5000/api/todos",
        {
            method: 'POST',
            header: {
                'cors': 'no-cors',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': 'localhost:5000'
            },
            body: formdata
        }
    ).then( res => res.json())
    .then(data => {
       console.log(data); 
    });
    
}