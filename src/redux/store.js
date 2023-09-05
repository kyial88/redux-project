import {applyMiddleware,createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import  todoReducer from "./reducer/todoReducer";



const store = createStore(
    todoReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;

