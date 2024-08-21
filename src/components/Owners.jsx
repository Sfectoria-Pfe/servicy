import React from 'react'
import founder from '../assets/images/founder.jpg'
import manager from '../assets/images/manager.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Owners() {
  return (
    <div>
      <section className="chefs_part blog_item_section section_padding">
        <div className="container ">
            <div className="row ">
                <div className="col-xl-5 d-flex justify_content-center align-items-center">
                    <div className="section_tittle">
                        <p>Team Members</p>
                        <h2>Our Experience Members</h2>
                    </div>
                </div>
            </div>
            <div className="d-flex  justify-content-center flex-wrap gap-4">
                <div className="col-sm-6 col-lg-4 ">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={founder} alt=""/>
                        </div>
                        <div className="single_blog_text text-center">
                            <h3>Adam Billiard</h3>
                            <p>Founder</p>
                            <div className="social_icon">
                                <a href="#"> <i className="ti-facebook"></i> </a>
                                <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                <a href="#"> <i className="ti-instagram"></i> </a>
                                <a href="#"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={manager} alt=""/>
                        </div>
                        <div className="single_blog_text text-center">
                            <h3>Fred Macyard</h3>
                            <p>Manager</p>
                            <div className="social_icon">
                                <a href="#"> <i className="ti-facebook"></i> </a>
                                <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                <a href="#"> <i className="ti-instagram"></i> </a>
                                <a href="#"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
