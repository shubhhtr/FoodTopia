import React from 'react'
import "./main.css"
import xyz from './image/bg1.webp'



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
            cImg:xyz,
            cTitle:"AAAAA",
            cDis:"checkinggg"
        },
        {
            cImg:"./image/bg1.webp",
            cTitle:"AAAAA",
            cDis:"checkinggg"
        },
        {
            cImg:"./image/bg1.webp",
            cTitle:"AAAAA",
            cDis:"checkinggg"
        },
        {
            cImg:"./image/bg1.webp",
            cTitle:"AAAAA",
            cDis:"checkinggg"
        },
        {
            cImg:"./image/bg1.webp",
            cTitle:"AAAAA",
            cDis:"checkinggg"
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