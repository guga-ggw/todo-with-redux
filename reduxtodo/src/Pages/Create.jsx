import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../store/todo/todo.thunks'
function Create() {

  const task = useRef()
  const dispatch = useDispatch()
  const lightmode = useSelector(state => state.mode.mode)


  const submit = (e) =>{
    e.preventDefault()
    const todo = {
     task: task.current.value,
     id : Math.floor(Math.random() * 100000000),
     url : "api/v1/todos"
  }
  dispatch(createTask(todo))
  task.current.value = ""
    
}


return (
<div className='Create_Page' id={lightmode == 'dark' ? "dark_textPage" : ""}>
  <form id='create_form' onSubmit={submit} >
    <h1 style={{color : "white", textShadow: "2px 2px 3px black"}}> Create Task</h1>
        <input
        type="text"
        placeholder='enter task'
        ref={task}
        />
      </form>
</div>
      
  )
}

export default Create