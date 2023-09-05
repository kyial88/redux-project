 import {ADD_TODO, GET_TODOS} from "../../lib/types";


const initialState = {
    todos:[],
}


export default function todoReducer(state = initialState,action) {
    switch (action.type){
        case GET_TODOS:
            return {...state,todos: action.payload}
        case ADD_TODO:
            return {...state,todos:[...state.todos, action.payload]}
        default:
            return state
    }



}