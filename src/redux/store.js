import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import  todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReduser";


const store = createStore(
    combineReducers({
        todoReducer:todoReducer,
        userReducer:userReducer,
    }), composeWithDevTools(applyMiddleware(thunk)))

export default store;

