 import React, {useEffect, useState} from "react";
 import {useDispatch, useSelector}  from  "react-redux";
 import {addTodo, deleteTodo, editTodo, getTodos} from "./redux/actions/todoAction";
 import {getUsers} from "./redux/actions/UserAction";



 const App = () => {
     const dispatch = useDispatch()
     const todoReducer = useSelector(state => state.todoReducer.todos)
      const users = useSelector(state => state.userReducer.users)
     const [todo,setTodo] = useState({})
     const [radio, setRadio] = useState('')

     // const [value, setValue] = useState('');


   useEffect(() => {
         // axios(`https://64e2f0aebac46e480e77efad.mockapi.io/todo`)
       dispatch(getTodos())
       dispatch(getUsers())
   },[])

   const handleAddTask = (e) => {
         e.preventDefault()
       if (todo.task){
          if (todo.id){
              dispatch(editTodo(todo))
          }else {
              dispatch(addTodo(todo))
          }
           setTodo({})
       }
   }

   const handleDelete = (todo) => {
     dispatch(deleteTodo(todo))
   }

   const handleEdit = (todo) => {
         setTodo(todo)
   }
   console.log(radio)

    return (
        <div className={'container'}>
            <div>
                <form onSubmit={handleAddTask}>
                    <div className="mb-3">
                        <label htmlFor="exempleInputEmail1" className="form-label">Task Title</label>
                        <input
                            onChange={(e) => setTodo({
                                ...todo,
                                task: e.target.value
                            })}
                            value={todo.task || ''}
                            type="text"
                            className="form-control"
                            id="exemleInputEmail1"
                            aria-describedby="emailHelp"
                        />

                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onChange={(e) => setTodo({
                                ...todo,
                                completed:e.target.checked
                            })}
                        />
                        <label className="form-check-label" htmlFor="exempleCheck1">Completed</label>

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <form>
                        <lable>First</lable>
                        <input onChange={(e) =>
                            setRadio(e.target.value)}
                               type="radio"
                               name={'Name'}
                               value={'First'}/>
                        <lable>Name</lable>
                        <input type="radio"
                               name={'Name'}
                               value={'Name'}/>
                    </form>



                </form>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                          todoReducer.map((todo,idx) =>
                              <tr key={todo.id}>
                                  <th scope="row">{idx+1}</th>
                                  <td>{todo.task}</td>
                                  <td>
                                      <input type="checkbox" onChange={(e)=>setTodo({completed:e.target.checked})}/>
                                  </td>
                                  <td>{todo.priority}</td>
                                  <td>
                                      <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(todo)}>Delete</button>
                                      <button type="button" className="btn btn-outline-info"  onClick={() =>handleEdit(todo)}>Edit</button>
                                  </td>

                              </tr>
                          )
                      }
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Hired</th>
                        <th scope="col">Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                             users.map((user,idx) =>
                            <tr key={user.id}>
                                <th scope="row">{idx+1}</th>
                                <td>{user.name}</td>
                                <td>
                                    <input type="checkbox"={user.name}/>
                                </td>
                                <td>{user.priority}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(todo)}>Delete</button>
                                    <button type="button" className="btn btn-outline-info"  onClick={() =>handleEdit(todo)}>Edit</button>
                                </td>

                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )

 }


export default App;
