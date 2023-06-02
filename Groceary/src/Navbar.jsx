import React from 'react'
import img1 from './Image/fruits-background.jpg'

const options = {
  display: "flex",
  width: "100%",
  height: "50px",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  lineHeight: "45px",
  marginTop: "1px"
}
const list_ul = {
  display: "flex",
  listStyle: "none"
}
const a_style = {
  textDecoration: "none",
  color: "black"
}
const dashboard = {
  height: "600px",
  width: "100%",
  position: "absolute"
}
const img_style = {
  position: "relative",
  height: "600px",
  width: "80%",
  margin: "1% auto",
  borderRadius: "25px",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
}
const text_style = {
  position: "absolute",
  top: "0",
  margin: "15% 0 0 15%",
  width: "30%"
}
const input_style={
  width:"75%",
  height:"2.5rem",
  borderRadius:"15px",
  position:"relative",
  marginTop:"5%"
}
function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 ms-5 text-success fw-bold" href="#">Nest grocery</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <form className="d-flex" style={{ width: "40%", marginLeft: "5%" }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn" type="submit" style={{ marginLeft: "35.5%", position: "absolute" }}><span class="material-symbols-outlined">search</span></button>
          </form>
          <div className="collapse navbar-collapse" style={{ marginLeft: "5%" }} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ width: "100%" }}>
              <span class="material-symbols-outlined mt-2">person</span>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Account</a>
              </li>
              <span class="material-symbols-outlined ms-5 mt-2">autorenew</span>
              <li className="nav-item">
                <a className="nav-link" href="#">Compare</a>
              </li>
              <span class="material-symbols-outlined ms-5 mt-2">favorite</span>
              <li className="nav-item">
                <a className="nav-link" href="#">Favourite</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Small Navigation */}

      <div className="options" style={options}>
        <div class="dropdown" style={{ marginLeft: "4%" }}>
          <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Browse All Categories
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div className="list ms-5">
          <ul className='list_ul' style={list_ul}>
            <span class="material-symbols-outlined mt-2">local_fire_department</span>
            <li><a href="#" style={a_style}>Hot Deals</a></li>
            <li className='ms-5'><a href="#" style={a_style}>Home</a></li>
            <li className='ms-5'><a href="#" style={a_style}>Food</a></li>
            <li className='ms-5'><a href="#" style={a_style}>Vegetables</a></li>
            <li className='ms-5'><a href="#" style={a_style}>Cookies</a></li>
            <li className='ms-5'><a href="#" style={a_style}>Meat & Seafood</a></li>
            <li className='ms-5'><a href="#" style={a_style}>Bakery</a></li>
            <span class="material-symbols-outlined fs-3 mt-2 ms-5">headset_mic</span>
            <li><a href="#" className='fs-3 ms-1 text-success' style={a_style}>1800-888</a></li>
          </ul>
        </div>
      </div>
      <div className="dashboard" style={dashboard}>
        <div className="img" style={img_style}>
          <img src={img1} style={{ width: '100%', height: "600px", borderRadius: "25px", }} alt="" />
        </div>
        <div className="text" style={text_style}>
          <h1>Don't miss amazing grocery deals</h1>
          <a href="#" className='text-secondary fs-5 mt-5' style={{ textDecoration: "none" }}>Sign Up for the daily newsletter</a>
          <button><span class="material-symbols-outlined" style={{position:"absolute",margin:"8% 0 0 -55%",zIndex:"1"}}>send</span></button><input type="text"  style={input_style}/><input type="submit" style={{height:"2.5rem",width:"6rem",borderRadius:"15px",border:"0",margin:"5% 0 0 -20%",position:"absolute"}} className='btn-success' value="Subscribe"  />
        </div>
      </div>
    </div>

  )
}

export default Navbar