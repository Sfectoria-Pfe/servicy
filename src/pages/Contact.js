import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";

export default function Contact() {
  return (
    <div  style={{marginBottom:100}}>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-section section_padding">
        <div class="container">
          <div class="d-none d-sm-block mb-5 pb-4 mt-5" style={{ height: "480px" }}>
      
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8625213586115!2d10.189982275783995!3d36.82181416648102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3550232fe4b9%3A0x488b37a9204e79dd!2sSfectoria!5e0!3m2!1sfr!2stn!4v1724003926606!5m2!1sfr!2stn" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        



          </div>


          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Get in Touch</h2>
            </div>
            <div class="col-lg-8">
              <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                novalidate="novalidate">
                <div class="row">
                  <div class="col-12 mb-4">
                    <div class="form-group">

                      <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"
                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                        placeholder='Enter Message'  style={{borderColor:"#f0e9ff"}}></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6  mb-4">
                    <div class="form-group">
                      <input  style={{borderColor:"#f0e9ff"}} class="form-control" name="name" id="name" type="text" onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'" placeholder='Enter your name' />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input  style={{borderColor:"#f0e9ff"}} class="form-control" name="email" id="email" type="email" onfocus="this.placeholder = ''"
                     placeholder='Enter email address' />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input  style={{borderColor:"#f0e9ff"}} class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'" placeholder='Enter Subject' />
                    </div>
                  </div>
                </div>
                <div className=' mt-5'>
                  <a href="#" style={{ width: 250 }} class="btn btn-dark btn-lg text-uppercase fs-6 rounded-1  d-flex justify-content-center">
                    send message
                    <svg width="24" height="24" viewBox="0 0 24 24" >
                      {/* <use xlink:href="#arrow-right"></use> */}
                    </svg></a>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="media contact-info d-flex gap-3">
               
                  <a href="#" classname="d-flex ">
                    <iconify-icon class="social-icon" icon="ri:twitter-fill"> <CiLocationOn class="social-icon" /></iconify-icon>
                  </a>
                
                <div class="media-body">
                  <h3>Servicy, Tunis.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div class="media contact-info d-flex gap-3">
              
                  <a href="#" classname="d-flex social">
                    <iconify-icon class="social-icon" icon="ri:twitter-fill"> <IoCallOutline class="social-icon" /></iconify-icon>
                  </a>
               
                <div class="media-body">
                  <h3>+216 24 546 721</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div class="media contact-info d-flex gap-3">
               
                  <a href="#" classname="d-flex">
                    <iconify-icon class="social-icon" icon="ri:twitter-fill"> <BsEnvelope class="social-icon" /></iconify-icon>
                  </a>
               
                <div class="media-body">
                  <h3>Servicy@gmail.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
