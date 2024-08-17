import React from 'react'
import LAVER from "../assets/images/LAVER.png"
import chef from "../assets/images/chef.png"
import plombier1 from "../assets/images/plombier1.png"
import baby from "../assets/images/baby.png"
import music from "../assets/images/music1.png"
import Carousel from 'react-bootstrap/Carousel';
export default function Hero() {
    return (
        <section id="banner" style={{ background: "#F9F3EC" }}>
            <div class="container ">
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <div class="swiper-slide ">
                            <div class="d-flex flex-wrap justify-content-center align-items-center gap-lg-4 banner-content align-items-center">
                                <div class="img-wrapper d-flex justify-content-center align-items-center ">
                                    <img src={LAVER} class="img-fluid" width={600} height={600} />
                                </div>
                                <div class="content-wrapper p-5 mb-5">
                                    <div class="secondary-font text-primary text-uppercase mb-4">We provide professional service at a friendly price</div>
                                    <h2 class="banner-title display-1 fw-normal">YOU ARE IN   <span class="text-primary"> <br></br>good hands</span>
                                    </h2>
                                    <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                        Services
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                                            {/* <use xlink:href="#arrow-right"></use> */}
                                        </svg></a>
                                </div>

                            </div>
                        </div>
                   
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <div class="swiper-slide">
                            <div class="d-flex flex-wrap justify-content-center align-items-center gap-lg-4  banner-content align-items-center">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src={chef} class="img-fluid" width={380} height={200} />
                                </div>
                                <div class="content-wrapper  p-5 mb-5">
                                    <div class="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                                    <h2 class="banner-title display-1 fw-normal">YOU ARE IN <span class="text-primary"><br></br>good hands</span>
                                    </h2>
                                    <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                        Services
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                                            {/* <use xlink:href="#arrow-right"></use> */}
                                        </svg></a>
                                </div>

                            </div>
                        </div>
                     
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <div class="swiper-slide ">
                            <div class="d-flex flex-wrap justify-content-center align-items-center gap-lg-4  banner-content align-items-center">
                                <div class="img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={plombier1} class="img-fluid" className='h-100 w-100'/>
                                </div>
                                <div class="content-wrapper  p-5 mb-5">
                                    <div class="secondary-font text-primary text-uppercase mb-4">more then 40 services !</div>
                                    <h2 class="banner-title display-1 fw-normal">YOU ARE IN <span class="text-primary"><br></br>good hands</span>
                                    </h2>
                                    <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                        Services
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                                            {/* <use xlink:href="#arrow-right"></use> */}
                                        </svg></a>
                                </div>

                            </div>
                        </div>
                      
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <div class="swiper-slide ">
                            <div class="d-flex flex-wrap justify-content-center align-items-center gap-lg-4  banner-content align-items-center">
                                <div class="img-wrapper  d-flex justify-content-center align-items-center">
                                    <img src={baby} class="img-fluid h-100 w-100 "  />
                                </div>
                                <div class="content-wrapper  p-5 mb-5">
                                    <div class="secondary-font text-primary text-uppercase mb-4">we make life easier for you </div>
                                    <h2 class="banner-title display-1 fw-normal">YOU ARE IN <span class="text-primary"><br></br>good hands</span>
                                    </h2>
                                    <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                        Services
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                                            {/* <use xlink:href="#arrow-right"></use> */}
                                        </svg></a>
                                </div>

                            </div>
                        </div>
                     
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <div class="swiper-slide ">
                            <div class="d-flex flex-wrap justify-content-center align-items-center gap-lg-4  banner-content align-items-center">
                                <div class="img-wrapper r d-flex justify-content-center align-items-center">
                                    <img src={music} class="img-fluid" className='h-100 w-100'  />
                                </div>
                                <div class="content-wrapper  p-5 mb-5">
                                    <div class="secondary-font text-primary text-uppercase mb-4">come join us</div>
                                    <h2 class="banner-title display-1 fw-normal">YOU ARE IN <span class="text-primary"><br></br>good hands</span>
                                    </h2>
                                    <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                        Services
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                                            {/* <use xlink:href="#arrow-right"></use> */}
                                        </svg></a>
                                </div>

                            </div>
                        </div>
                     
                    </Carousel.Item>
                </Carousel>

            </div>
        </section>
    )
}
