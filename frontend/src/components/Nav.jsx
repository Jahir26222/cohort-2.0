import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate =useNavigate()
  return (
   <div className="nav">
    <button onClick={()=>{
        navigate('/create-note')
    }}>Create Note</button>
   </div>
  )
}

export default Nav