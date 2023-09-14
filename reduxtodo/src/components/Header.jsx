import React from 'react'
import { Link } from 'react-router-dom'
import { change } from '../store/lightmode/toggle.slice'
import { useDispatch, useSelector } from 'react-redux'

function Header() {

  const dispatch = useDispatch()
  const lightmode = useSelector(state => state.mode.mode)



  const changetheme = () => {
    dispatch(change())
  }
  return (
    <div className='Header' id={lightmode == 'dark' ? "dark_header" : ""}>
        <div className="links">
            <Link id='link' to={'/'}>MainPage</Link>
            <Link id='link' to={'/create'}>Create</Link>
        </div>
        <button onClick={() => changetheme()}>Change Theme</button>
    </div>
  )
}

export default Header