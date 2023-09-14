import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { setvalueofedit } from '../store/todo/todo.slice'
import { useDispatch, useSelector } from 'react-redux'
import { putTask } from '../store/todo/todo.thunks'

function Edit(props) {
    const lightmode = useSelector(state => state.mode.mode)
    const task = useSelector((state) => state.todo.editedTask)
    const param = useParams()
    const editedValue = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        dispatch(putTask({url : `/api/v1/todos/${param.id}`, data : {task : `${editedValue.current.value}`}})).then(() => navigate('/') )
        
    }

  return (
    <div className='Edit_Page' id ={lightmode == 'dark' ? "dark_textPage" : ""}>
  <form id='update_form' onSubmit={(e) => Submit(e)}>
    <h1 style={{color : "white", textShadow: "2px 2px 3px black"}}> Edit Task</h1>
        <input
        type="text"
        placeholder='enter task'
        ref={editedValue}
        defaultValue={task}
        />
      </form>
    </div>
  )
}


export default Edit
