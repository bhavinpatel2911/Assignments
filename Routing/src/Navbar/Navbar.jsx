import React from 'react'
import './Navbar_style.css'

let nav_style={
    backgroundColor:"#E0E0E0",
    position:"fixed",
    top:"0",
    width:"100%",
    zIndex:"1",
    borderBottem:"1px solid black",
    // boxShadow: "#E0E0E0 0px 3px 8px"
    boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
}
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light" style={nav_style}>
                <div className="container-fluid">
                    <a className="navbar-brand text-dark fs-3 heading_style">Kailash Electricals</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" style={{backgroundColor:"#3d5c5c", color:"white"}} type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )
}

export default Navbar