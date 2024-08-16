import React from 'react'
import a from "../assets/images/3d house.png"
import b from "../assets/images/Screenshot 2024-08-15 105145.png"
import c from "../assets/images/driller.png"

export default function Services() {
    return (
        <div className='container mt-5'>
            <div class="row">
                <div class="col-xl-5">
                    <div class="section_tittle">
                        <p>Popular Services</p>
                        <h2>Our Exclusive services</h2>
                    </div>
                </div>
                <div className='d-flex justify-content-start align-items-center gap-3 '>
                    <div className='d-flex flex-column justify-content-center align-items-center' >
                        <div className='rounded-circle p-3' style={{ backgroundColor: "#f9f3ec" }}>
                            <img src={a} width={70} height={70} />

                        </div>
                        <h5>painting</h5>


                    </div>

                    <div className='d-flex gap-3 '>
                        <div className='d-flex flex-column justify-content-center align-items-center' >
                            <div className='rounded-circle p-3' style={{ backgroundColor: "#f9f3ec" }}>

                                <img src={c} width={70} height={70} />
                            </div>
                            <h5>painting</h5>

                        </div>
                    </div>
                    <div className='d-flex gap-3 '>
                        <div className='d-flex flex-column justify-content-center align-items-center' >

                            <div className='rounded-circle p-3' style={{ backgroundColor: "#f9f3ec" }}>

                                <img src={b} width={70} height={70} />
                            </div>
                            <h5>painting</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
