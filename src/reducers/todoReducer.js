import {FETCH_TODOS, ADD_TODO} from '../actions/actionTypes';

const initalState ={
    is_fetching: false,
    todos: [1,2,3],
    fetched: true
};

export default function(state=initalState, action){

    switch(action.type){
        case FETCH_TODOS:{
            console.log(action);
            console.log("here man");
            return {
                ...state,
                is_fetching: true
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }
        default:
            return {...state};
    }

}