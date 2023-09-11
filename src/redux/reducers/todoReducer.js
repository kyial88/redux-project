 import {ADD_TODO, GET_TODOS} from "../../lib/types";


//
 const initialState = {
     users: []
 }


export default function todoReducer(state = initialState,action) {
    switch (action.type){
        case GET_TODOS:
            return{ ...state,todos:action.payload}
        case ADD_TODO:
            return {...state,todos: [...state.todos,action.payload]}
        case 'DELETE_TODO':
            return {...state,todos: state.todos.filter(todo => todo.id !== action.payload.id)}
        case 'EDIT_TODO':
            return {...state,todos:state.todos.map(todo =>todo.id === action.payload.id ? action.payload: user)}
        default:
            return state

    }
}

















        // case GET_TODOS:
        //     return {...state,todos: action.payload}
        // case ADD_TODO:
        //     return {...state,todos:[...state.todos, action.payload]}
        // case 'DELETE_TODO':
        //     return {...state,todos:state.todos.filter(todo => todo.id !== action.payload.id)}
        // case 'EDIT_TODO':
        //     return {...state,todos: state.todos.map(todo =>todo.id === action.payload.id ? action.payload: todo)}
        //  default:
//         //     return state
//     }
// }