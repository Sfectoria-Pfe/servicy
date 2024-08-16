import React from 'react'
import logo from "../assets/images/LOGOservicy.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
export default function Footer() {
  return (
    <div>

      <footer id="footer" class="my-5">
        <div class="container py-5 my-5">
          <div class="row">

            <div class="col-md-3">
              <div class="footer-menu">
                {/* <img src={logo} alt="logo" width={"100"} height={"100"} /> */}
                <p class="blog-paragraph fs-6 mt-3">Subscribe to our newsletter to get updates about our grand offers.</p>
                <div class="social-links">
                  <ul class="d-flex list-unstyled gap-2">
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon" icon="ri:twitter-fill"> <FaFacebookF class="social-icon" /></iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon" icon="ri:twitter-fill"><FaTwitter class="social-icon" /></iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon" icon="ri:pinterest-fill">< FaPinterest class="social-icon" /></iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon" icon="ri:instagram-fill"><FaInstagram class="social-icon" /> </iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon" icon="ri:youtube-fill"><FaYoutube class="social-icon" />
                        </iconify-icon>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer-menu">
                <h3>Quick Links</h3>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#" class="nav-link">Home</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">About us</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Offer </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Services</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Conatct Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer-menu">
                <h5>Help Center</h5>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#" class="nav-link">FAQs</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Payment</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Returns & Refunds</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Checkout</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Delivery Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div>
                <h3>Our Newsletter</h3>
                <p class="blog-paragraph fs-6">Subscribe to our newsletter to get updates about our grand offers.</p>
                <div class="search-bar border rounded-pill border-dark-subtle px-2">
                  <form class="text-center d-flex align-items-center" action="" method="">
                    <input type="text" class="form-control border-0 bg-transparent" placeholder="Enter your email here" />
                    <iconify-icon class="send-icon" icon="tabler:location-filled"><BsSend class="send-icon" />
                    </iconify-icon>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}
