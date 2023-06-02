import React from 'react'
import './Home_css.css'

let main_div_style = {
    width: "100%",
    margin: "10% auto",
    display:"flex"
}
function Home() {
    return (
        <div>
            <div className="main_div  justify-content-center" style={main_div_style}>
                <div className="card card_style">
                    <div className="card-body">
                        <h5 className="card-title">New Moters</h5>
                        <p className="card-text">All Types of Moter Trading in Wholesale and Retail</p>
                        <a href="#" className="btn touch_btn">Get in Touch</a>
                    </div>
                    <img src="./image/moter.png" className="card-img-top img_style" alt="Moter Image" />
                </div>
                <div className="card card_style" style={{marginLeft:"10%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Industrial Pannels</h5>
                        <p className="card-text">Making any kind Industrial Pannel at Order.</p>
                        <a href="#" className="btn touch_btn">Get in Touch</a>
                    </div>
                    <img src="./image/pannel.png" className="card-img-top img_style" alt="..." />
                </div>
            </div>

            <div className="main_div justify-content-center" style={{marginTop:"-7%", display:"flex"}}>
            <div className="card card_style">
                    <div className="card-body">
                        <h5 className="card-title">Moter Winding</h5>
                        <p className="card-text">All the types of Moter Rewinding and Purchase.</p>
                        <a href="#" className="btn touch_btn">Get in Touch</a>
                    </div>
                    <img src="./image/moter_wind.png" className="card-img-top img_style" alt="..." />
                </div>
                <div className="card card_style" style={{marginLeft:"10%"}}>
                    <div className="card-body">
                        <h5 className="card-title">M.C.B.</h5>
                        <p className="card-text">All Types of MCBs and ELCBs are Available.</p>
                        <a href="#" className="btn touch_btn">Get in Touch</a>
                    </div>
                    <img src="./image/mcb.png" className="card-img-top img_style" alt="Moter Image" />
                </div>
            </div>

            <div className="main_div mt-5 justify-content-center" style={{ display:"flex"}}>
                <div className="card card_style">
                    <div className="card-body">
                        <h5 className="card-title">Designing Fan</h5>
                        <p className="card-text">All the Companies Fans in Varous Designs are Available.</p>
                        <a href="#" className="btn touch_btn">Get in Touch</a>
                    </div>
                    <img src="./image/crompton_fan.png" className="card-img-top img_style" alt="..." />
                </div>
                <div className="card card_style" style={{marginLeft:"10%"}}>
                    <div className="card-body">
                        <h5 className="card-title">L.E.D. Light</h5>
                        <p className="card-text">All the Companies LED sticks and light are Available.</p>
                        <a href="#" className="btn touch_btn">Get in Touch</a>
                    </div>
                    <img src="./image/led_stick.png" className="card-img-top img_style" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Home