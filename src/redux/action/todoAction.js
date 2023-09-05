import axios from "axios";
import {ADD_TODO,GET_TODOS} from "../../lib/types";

export const getTodos = () => {
    return (dispatch) => {
        axios('https://64e2f0aebac46e480e77efad.mockapi.io/todo')
            .then(res =>{
                console.log(res.data)
                dispatch({type:GET_TODOS, payload: res.data})
            })
    }


}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post('https://64e2f0aebac46e480e77efad.mockapi.io/todo',todo)
            .then(res =>dispatch({type:ADD_TODO, payload: res.data}))
    }
}












