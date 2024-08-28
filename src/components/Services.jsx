import React from 'react'
import show from "../assets/images/services/show more.jpg"

import { allServices } from '../constants/allServices'
import { useNavigate } from 'react-router-dom'
import Fade from 'react-reveal/Fade';



export default function Services() {

    const navigate = useNavigate()
    return (

        <Fade right>
        <div className='container ' style={{ marginTop: 80 }}>

            <div class="row">
                <div class="col-xl-5">
                    <div class="section_tittle">
                        <p>Popular Services</p>
                        <h2>Our Exclusive services</h2>
                    </div>
                </div>
                <div className='d-flex flex-wrap  align-items-center gap-4 '>

                    {allServices.map((elem, i) => (
                        <div className='d-flex   gap-2 ' style={{ width: 160 }}>
                            <div className='d-flex flex-column  justify-content-center align-items-center ' >
                                <div className='rounded-circle p-3' style={{ backgroundColor: "#f9f3ec" }}>

                                    <img src={elem.img} width={36} height={36} />
                                </div>

                                <h5 className='mt-4'>{elem.title}</h5>

                            </div>
                        </div>
                    ))}
                    <div className='d-flex flex-column  justify-content-center align-items-center ' onClick={()=>navigate("services")}>
                        <div className='rounded-circle p-3' style={{ backgroundColor: "#f9f3ec" }}>

                            <img src={show} width={36} height={36} />
                        </div>

                        <h5 className='mt-4' >Show More</h5>

                    </div>


                </div>
            </div>
        </div>
        </Fade>
    )
}
