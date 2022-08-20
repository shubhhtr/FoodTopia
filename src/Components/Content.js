import React from 'react'
import "./main.css"
import xyz from './image/bg1.webp'
import aaa from './image/21.jpeg'
import aab from './image/22.jpeg'
import aac from './image/7.jpeg'
import aad from './image/11.jpeg'
import aae from './image/10.jpeg'
import aaf from './image/9.jpeg'
import aag from './image/6.jpeg'
import aah from './image/2.jpeg'
import aai from './image/3.jpeg'
import aaj from './image/4.jpeg'



function Data({image,title,about}){
    return (
        <div className="col">
                    <a href="#"><div className="card h-100">
                        <img src={image} className="card-img-top" alt="card_image" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{about}</p>
                        </div>
                    </div> </a>
                </div>
    )
}


function content() {

    const obj=[
        {
            id:1,
            cImg:xyz,
            cTitle:"Burger King",
            cDis:"American, Fast Food"
        },
        {
            id:2,
            cImg:aaa,
            cTitle:"KFC",
            cDis:"American, Fast Food, Snacks"
        },
        {
            id:3,
            cImg:aab,
            cTitle:"Chai Point",
            cDis:"Bakery, Combo, Cafe, Beverages, Snacks, Street Food..."
        },
        {
            id:4,
            cImg:aac,
            cTitle:"Kwalty Walls Frozen Dessert and Ice Cream Shop",
            cDis:"Ice Cream"
        },
        {
            id:5,
            cImg:aad,
            cTitle:"KFC",
            cDis:"American, Fast Food"
        },
        {
            id:6,
            cImg:aae,
            cTitle:"Burger King",
            cDis:"American, Fast Food, Snacks"
        },
        {
            id:7,
            cImg:aaf,
            cTitle:"Kwalty Walls Frozen Dessert and Ice Cream Shop",
            cDis:"Bakery, Combo, Cafe, Beverages, Snacks, Street Food..."
        },
        {
            id:8,
            cImg:aag,
            cTitle:"Chai Point",
            cDis:"Ice Cream"
        },
        {
            id:9,
            cImg:aah,
            cTitle:"Burger King",
            cDis:"American, Fast Food"
        },
        {
            id:10,
            cImg:aai,
            cTitle:"KFC",
            cDis:"American, Fast Food, Snacks"
        },
        {
            id:11,
            cImg:aaj,
            cTitle:"Chai Point",
            cDis:"Bakery, Combo, Cafe, Beverages, Snacks, Street Food..."
        }
    ]

    const ittirate=obj.map(
        data=>{
            return <Data image={data.cImg} title={data.cTitle} about={data.cDis} />
        }
    )

  return (
    <div>
        <div className="cnt">
            <h3>Popular restaurants in and around your city</h3><br />
            <div className="row row-cols-1 row-cols-md-3 g-4"> 
                {ittirate}
            </div>
        </div>
    </div>
  )
}

export default content