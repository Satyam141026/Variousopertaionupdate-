import React from 'react'
import './headFoot.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    
<nav className="navbar navbar-expand-lg bg-light S_header">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
   <Link className='no' to="/">Register</Link>
   <Link className='no' to="/login">Login</Link>  
   <Link className='no' to="/editstudent">Edit</Link>
   <Link className='no' to="/view">View</Link>
   <Link className='no' to="/getstudent">GetStudents</Link>
      </div>
    </div>
  </div>
</nav>





    
  )
}
