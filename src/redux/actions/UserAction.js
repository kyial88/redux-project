import axios from "axios";


export const getUsers = () => {
    return (dispatch) => {
        axios( 'https://64e2f0aebac46e480e77efad.mockapi.io/users ')
            .then(res => dispatch({type:'GET_USERS',payload:res.data}))
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        axios.post('https://64e2f0aebac46e480e77efad.mockapi.io/users',user)
            .then(res => dispatch({type:'ADD_USER',payload:res.data}))
    }
}

export const deleteUser = user => {
    return (dispatch) => {
        axios.delete(`https://64e2f0aebac46e480e77efad.mockapi.io/users/${user.id}`)
            .then(res => dispatch({type:'DELETE_USER',payload:res.data}))
    }
}

export const editTodo = todo => {
    return (dispatch) => {
        axios.put(`https://64e2f0aebac46e4i80e77efad.mockapi.io/users/${todo.id}`,todo)
            .then(res => dispatch({type:'EDIT_TODO',payload:res.data}))
    }
}
