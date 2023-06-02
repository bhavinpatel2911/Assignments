import React from 'react'

let input_form_style = {
    width: "100%",
    margin: "6% 0 0 0%"
}
let form_style = {
    height: "640px",
    width: "50%",
    margin: "auto",
    padding: "2% 5% 0 5%",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
}
function Registration() {
    return (
        <div>
            <div className="input_form" style={input_form_style}>
                <form style={form_style}>
                    <h3 className='mb-4'>Send Inquiry</h3>
                    <div className="row g-3 mb-3">
                        <div className="col">
                        <label for="fname" class="form-label">First Name</label>
                            <input type="text" id="fname" className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col">
                        <label for="lname" class="form-label">Last Name</label>
                            <input type="text" id="lname" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className='mb-2'>Address</label>
                        <textarea className="form-control mb-3" placeholder="Enter Full Address" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col">
                        <label for="contact" class="form-label">Contact</label>
                            <input type="text" id="contact" className="form-control" placeholder="Contact" aria-label="First name" />
                        </div>
                        <div className="col">
                        <label for="email" class="form-label">Email</label>
                            <input type="text" id="email" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className='mb-2'>Meaasge</label>
                        <textarea className="form-control mb-3" placeholder="Write Your Inquiry" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
                    </div>
                    <button type="submit" className="btn" style={{backgroundColor:"#3d5c5c", color:"white"}}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Registration