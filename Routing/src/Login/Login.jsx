import React from 'react'

let login_form_style={
    width:"100%",
    marginTop:"6%",
}
let login_input_style={
    height:"380px",
    width:"30%",
    padding:"2% 5% 0 5%",
    margin:"auto",
    boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
}
let input_style={
    width:"100%"
}
function Login() {
    return (
        <div>
            <div className="login_form" style={login_form_style}>
            <form style={login_input_style}>
                <h3 className='mb-4'>Admin Login</h3>
                <div className="form-group mb-4">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" style={input_style} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" style={input_style} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check mb-4">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn" style={{backgroundColor:"#3d5c5c", color:"white"}}>Submit</button>
            </form>

            </div>
        </div>
    )
}

export default Login