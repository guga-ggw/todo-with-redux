import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTask } from '../store/todo/todo.thunks'
import { deleteTask } from '../store/todo/todo.thunks'
import { Link, useNavigate } from 'react-router-dom'
import { setvalueofedit } from '../store/todo/todo.slice'

export default function Main() {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo.todoList)
  const loading = useSelector(state => state.todo.isloading)
  const navigate = useNavigate()
  const lightmode = useSelector(state => state.mode.mode)
  
  
  const deletetask = (id) =>{
    dispatch(deleteTask(`api/v1/todos/${id}`))
  }

  const edittask = ({task, id}) => {
    const edited =  dispatch(setvalueofedit(task))
    if(edited) navigate(`/edit_todo/${id}`)
  }


  useEffect(() => {
    dispatch(getTask())
  },[])
    

  if(loading) return (
  <div className='loading_Page' id={lightmode == 'dark' ? 'dark_Loading' : ""}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h5>Laoading...</h5>
  </div> )
  return (
    
    <div className='MainPage' id={lightmode == 'dark' ? 'dark_MainPage' : ""}>
      <div className="todo_list">
        <h1 id='todo_header_text'>Todos:</h1>
      { todo?.map((item) => (
        <div className="todo" key={item._uuid}>
          <h1>{item.task}</h1>
          <div className="buttons">
            <Link id='linkbutton' onClick={() => edittask({task : item.task, id : item._uuid})}>Edit</Link>
            <button onClick={() => deletetask(item._uuid)}>Delete</button>
          </div>

        </div>
      )) || []} 
      </div>
      
      
    </div>
  )
}
