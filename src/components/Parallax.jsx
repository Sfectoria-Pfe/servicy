import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import person1 from "../assets/images/pics/person_1.jpg"
import {  FaQuoteRight } from "react-icons/fa";
import person from "../assets/images/pics/person_2.jpg"
import personn from "../assets/images/pics/person_3.jpg"
import perso from "../assets/images/pics/staff-2.jpg"
import pers from "../assets/images/pics/staff-5.jpg"
import per from "../assets/images/pics/person_4.jpg"
export default function Parallax() {
  return (
    <div class="parallax mt-5">
      <section class="ftco-section testimony-section" >
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-center pt-5 mb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
              <h2>Happy Clients &amp; Feedbacks</h2>
            </div>
          </div>
          <div style={{ height: '1000px', fontSize: '36px' }}>
            <div class="row ftco-animate">
              <div class="col-md-12">
                <Carousel>
                  <Carousel.Item interval={3000}>
                    <div className='d-flex justify-content-center gap-3'>
                    <article className="review card" style={{maxWidth:"300px",maxHeight:"300px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person1} className="person-img " />
                        {/* <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span> */}
                      </div>
                      <h4 className="author">Tom Mars</h4>
                      <p className="job">Project Founder</p>
                      <p className="job " style={{fontSize:"10px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px", maxHeight:"300px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person} className="person-img " />
                        {/* <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span> */}
                      </div>
                      <h4 className="author">Max Garden</h4>
                      <p className="job">Teacher</p>
                      <p className="job" style={{fontSize:"10px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px", maxHeight:"300px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={personn} className="person-img " />
                        {/* <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span> */}
                      </div>
                      <h4 className="author">Roger Scott</h4>
                      <p className="job">Marketing Manager</p>
                      <p className="job" style={{fontSize:"10px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className='d-flex justify-content-center gap-3'>
                    <article className="review card" style={{maxWidth:"350px",maxHeight:"300px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={perso} className="person-img " />
                        {/* <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span> */}
                      </div>
                      <h4 className="author">Tom Mars</h4>
                      <p className="job">Project Founder</p>
                      <p className="job " style={{fontSize:"10px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px", maxHeight:"300px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={pers} className="person-img " />
                        {/* <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span> */}
                      </div>
                      <h4 className="author">Max Garden</h4>
                      <p className="job">Teacher</p>
                      <p className="job" style={{fontSize:"10px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px", maxHeight:"300px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={per} className="person-img " />
                        {/* <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span> */}
                      </div>
                      <h4 className="author">Roger Scott</h4>
                      <p className="job">Marketing Manager</p>
                      <p className="job" style={{fontSize:"10px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </article>
                    </div>
                  </Carousel.Item>
                   {/* <Carousel.Item interval={2000}>
                   <div className='d-flex justify-content-center gap-3'>
                   <article className="review card" style={{maxWidth:"350px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person1} className="person-img " />
                        <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span>
                      </div>
                      <h4 className="author">Tom Mars</h4>
                      <p className="job">Project Founder</p>
                      <p className="job">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person1} className="person-img " />
                        <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span>
                      </div>
                      <h4 className="author">Max Garden</h4>
                      <p className="job">Teacher</p>
                      <p className="job">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person1} className="person-img " />
                        <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span>
                      </div>
                      <h4 className="author">Roger Scott</h4>
                      <p className="job">Marketing Manager</p>
                      <p className="job">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    </div>   
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                  <div className='d-flex justify-content-center gap-3'>
                   <article className="review card" style={{maxWidth:"350px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person1} className="person-img " />
                        <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span>
                      </div>
                      <h4 className="author">Tom Mars</h4>
                      <p className="job">Project Founder</p>
                      <p className="job">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person1} className="person-img " />
                        <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span>
                      </div>
                      <h4 className="author">Max Garden</h4>
                      <p className="job">Teacher</p>
                      <p className="job">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    <article className="review card" style={{maxWidth:"350px"}}>
                      <div className="img-container">
                        <img  alt="avatar" src={person1} className="person-img " />
                        <span className="quote-icon">
                          <FaQuoteRight size={30} />
                        </span>
                      </div>
                      <h4 className="author">Roger Scott</h4>
                      <p className="job">Marketing Manager</p>
                      <p className="job">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      
                     
                    </article>
                    </div>   
                  </Carousel.Item> */}

                  {/* <Carousel.Item interval={2000}>
                    <div class="swiper-slide ">
                      <div class="testimony-wrap py-4">
                        <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                        <div class="text">
                          <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                          <div class="d-flex align-items-center">
                            <div class="user-img bg-e"></div>
                            <div class="pl-3">
                              <p class="name">Roger Scott</p>
                              <span class="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div class="swiper-slide ">
                      <div class="testimony-wrap py-4">
                        <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                        <div class="text">
                          <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                          <div class="d-flex align-items-center">
                            <div class="user-img bg-o"></div>
                            <div class="pl-3">
                              <p class="name">Roger Scott</p>
                              <span class="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>  */}

                </Carousel>

              </div>
            </div>
          </div>

        </div>

      </section>
    </div>


  )
}
