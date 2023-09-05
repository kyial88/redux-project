 import React, {useEffect,useState} from "react";
 import {useDispatch, useSelector} from "react-redux";
 import {addTodo, getTodos} from "./redux/action/todoAction";


 const App = () => {
     const dispatch = useDispatch()
     const todoReducer = useSelector(state => state.todos)
     const [todo,setTodo] = useState({})
     // const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
     // const [value, setValue] = useState('');


   useEffect(() => {
       // axios(`https://64e2f0aebac46e480e77efad.mockapi.io/todo`)
       dispatch(getTodos())
   },[])

   const handleAddTask = (e) => {
         e.preventDefault()
          dispatch(addTodo(todo))
          setTodo({})
       // console.log(todo)
   }
    return (
        <div className={'container'}>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exempleInputEmail1" className="form-label">Task Title</label>
                        <input
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

                </form>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )

 }


export default App;
