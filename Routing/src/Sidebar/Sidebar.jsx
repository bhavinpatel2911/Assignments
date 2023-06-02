import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar_css.css'

function Sidebar() {
  return (
    <div>
        <div className="mainside">
            <ul className="ul_style">
                <li><NavLink className="a_style" to="/ ">Home</NavLink></li>
                <li><NavLink className="a_style" to="/Login">Login</NavLink></li>
                <li><NavLink className="a_style" to="/Inquiry">Send Inquiry</NavLink></li>
                <li><NavLink className="a_style" to="">About</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar