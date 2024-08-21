import React from 'react'
import about from '../assets/images/aboutt.png'

function Team() {
    return (

             <div style={{marginTop:80}}>
        <section id="banner" style={{ background: "#F9F3EC" }}>
        <div class="container mt-5">
      <div class="row  banner-content d-flex justify-content-center align-items-center">
        <div class="img-wrapper col-12 col-md-6">
          <img src={about} class="img-fluid"/>
        </div>
        <div class="content-wrapper col-12 offset-md-1 col-md-5 p-md-0 p-5">
          <div class="secondary-font text-primary text-uppercase mb-3 fs-4">hurry up</div>
          <h2 class="banner-title display-1 fw-normal">Come join our team !!!
          </h2>
          <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
            join now
            <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
              {/* <use xlink:href="#arrow-right"></use> */}
            </svg></a>
        </div>

      </div>
    </div>
  </section>
             </div>
    )
}
export default Team
