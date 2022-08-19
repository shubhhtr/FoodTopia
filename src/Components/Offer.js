import React from 'react'
import './main.css'
import img1 from './image/a1.jpg'
import img2 from './image/a2.jpg'
import img3 from './image/bg2.webp'

function Offer() {
  return (
    
        <div className="cr">

            <br />
            <h2><br />Today's Offers<br /></h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Sandwich</h5>
                            <p>50% off Today, Order Now!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Some Food</h5>
                            <p>50% off Today, Order Now!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Burgers</h5>
                            <p>60% off Today, Order Now!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <br /><br /><br /><br />

        </div>
    
  )
}

export default Offer