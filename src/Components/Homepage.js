import React from 'react'
import './home.css'
import bgimg from "./image/bg1.jpg"

function HomePage() {
  return (
    <div>
        <div className="img-container">
            <img src={bgimg} className="bgimg" />
            
            <div className="addressbox">
                <span className="line">Order breakfast, lunch, and dinner.</span><br />
                <input type="text" name="foo" placeholder="Enter Delivery Address" id="bar" />
                <a href="#"><button type="button" name="button" id="but">Find Food</button></a>
                <p><a href="#" style={{color: "blue"}}>Sign in</a> to see your saved addresses</p>
                <p className="cities"> <br />We are available in all major cities including <strong>Delhi</strong>, <strong>Mumbai</strong>, <strong>Chennai</strong>, <strong>Banglore</strong>, <strong>Lucknow</strong>, <strong>Surat</strong> and <strong>many more</strong>.</p>
            </div>

        </div>
    </div>
  )
}

export default HomePage