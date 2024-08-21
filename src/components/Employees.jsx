import React from 'react'
import baker from '../assets/images/baker.jpg'
import dohn from '../assets/images/dohn.png'
import photographer from '../assets/images/photographer.jpg'
import taxi from '../assets/images/taxi.jpg'

export default function Sectionservice() {
    return (
        <div>
            <section class="exclusive_item_part blog_item_section " style={{marginTop:80}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5">
                            <div class="section_tittle">
                                <p> Our experience employees</p>
                                <h2>the pro workers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-md-between justify-content-center flex-wrap gap-4">
                        <div class="col-sm-6 col-lg-24 " style={{ width: 300 }}>
                            <div class="single_blog_item">
                                <div class="single_blog_img">
                                    <img src={dohn} alt="" height={300} style={{ objectFit: "cover", objectPosition: "50% 28%" }} />
                                </div>
                                <div class="single_blog_text ">
                                    <div className='d-flex justify-content-end'><span class="badge rounded-pill bg-primary ">Painting walls</span></div>
                                    <div className='d-flex gap-24 align-items-center '>
                                        <h3 className='mt-2'>John Abraham</h3></div>
                                    <p class="btn_3">+10 years experience ! <img src="img/icon/left_2.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-24" style={{ width: 300 }}>
                            <div class="single_blog_item">
                                <div class="single_blog_img">
                                    <img src={taxi} alt="" height={300} style={{ objectFit: "cover", objectPosition: "40% 24%" }} />
                                </div>
                                <div class="single_blog_text">
                                    <div className='d-flex justify-content-end'><span class="badge rounded-pill bg-primary ">Uber driver</span></div>
                                    <div className='d-flex gap-24 align-items-center '>
                                        <h3 className='mt-2'>kristopher garden</h3></div>
                                    <p class="btn_3">More then 60% satisfied clients ! <img src="img/icon/left_2.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-24" style={{ width: 300 }}>
                            <div class="single_blog_item">
                                <div class="single_blog_img">
                                    <img src={photographer} alt="" height={300} style={{ objectFit: "cover", objectPosition: "right" }} />
                                </div>
                                <div class="single_blog_text">
                                    <div className='d-flex justify-content-end'><span class="badge rounded-pill bg-primary ">Photographer</span></div>
                                    <div className='d-flex gap-24 align-items-center '>
                                        <h3>David guetta </h3></div>
                                    <p class="btn_3"> Known for the highest quality of his photos !  <img src="img/icon/left_2.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-24 " style={{ width: 300 }}>
                            <div class="single_blog_item">
                                <div class="single_blog_img">
                                    <img src={baker} alt="" height={300} style={{ objectFit: "cover", objectPosition: "50% 28%" }} />
                                </div>
                                <div class="single_blog_text">
                                    <div className='d-flex justify-content-end'><span class="badge rounded-pill bg-primary ">Baker</span></div>
                                    <div className='d-flex gap-24 align-items-center '>
                                        <h3>justin smith </h3></div>
                                    <p class="btn_3"> famous of his delicious bread  <img src="img/icon/left_2.svg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <a href="#" style={{ width: 250 }} class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1  d-flex justify-content-center">
                        show more
                        <svg width="24" height="24" viewBox="0 0 24 24" class="mb-1">
                            {/* <use xlink:href="#arrow-right"></use> */}
                        </svg></a>
                    </div>


                </div>

            </section>
        </div>
    )
}
