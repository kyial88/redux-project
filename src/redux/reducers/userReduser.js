


const initialState = {
    users:[],
}


export default function todoReducer(state = initialState,action) {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.payload}
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}
        case 'DELETE_USER':
            return {...state, users: state.users.filter(user => user.id !== action.payload.id)}
        case 'EDIT_USER':
            // return {...state,todos:state.todos.map(todo =>todo.id === action.payload.id ? )}
            return {...state, users: state.users.map(user => user.id === action.payload.id ? action.payload : user)}
        default:
            return state
    }


}