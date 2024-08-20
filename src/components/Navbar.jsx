import React from 'react'
import logo from '../assets/images/logo.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoIosBookmark } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
    return (
        <>

            <div className="container py-4">
                <div className="row  pb-0  align-items-center ">

                    <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                        <div className="main-logo">
                            <a href="index.html">
                                <img src={logo} alt="logo" className="img-fluid" width={"70"} height={"70"} />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                        <div className="search-bar border rounded-2 px-3 border-dark-subtle">
                            <form id="search-form" className="text-center d-flex align-items-center" action="" method="">
                                <input type="text" className="form-control border-0 bg-transparent"
                                    placeholder="Search for more than 10,000 products" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
                                </svg>
                            </form>
                        </div>
                    </div>

                    <div
                        className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                        <div className="support-box text-end d-none d-xl-block">
                            <span className="fs-6 secondary-font text-muted">Phone</span>
                            <h5 className="mb-0">+216 24 546 721</h5>
                        </div>
                        <div className="support-box text-end d-none d-xl-block">
                            <span className="fs-6 secondary-font text-muted">Email</span>
                            <h5 className="mb-0">Servicy@gmail.com</h5>
                        </div>



                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <hr className="m-0" />
            </div>

            <div className="container">
                <nav className="main-menu d-flex navbar navbar-expand-lg ">

                    <div className="d-flex d-lg-none align-items-end mt-3">
                        <ul className="d-flex justify-content-end list-unstyled m-0">
                            <li>
                                <a href="account.html" className="mx-3">
                                    <iconify-icon icon="healthicons:person" ><IoMdPerson className="fs-4" />
                                    </iconify-icon>
                                </a>
                            </li>
                            <li>
                                <a href="wishlist.html" className="mx-3">
                                    <iconify-icon icon="mdi:heart" className="fs-4"><IoIosBookmark className="fs-4" />
                                    </iconify-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                                    aria-controls="offcanvasCart">
                                    <iconify-icon icon="mdi:cart" className="fs-4 position-relative"><FaRegCalendarAlt className="fs-4 position-relative" />
                                    </iconify-icon>
                                    <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                                        03 
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch"
                                    aria-controls="offcanvasSearch">
                                    <span>
                                        <iconify-icon icon="tabler:search" className="fs-4"></iconify-icon>
                                    </span>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div className="offcanvas-header justify-content-center">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body justify-content-between">
                        <select class="filter-categories border-0 mb-0 me-5">
                            <option>Services</option>
                            <option>Cleaning</option>
                            <option>Babysitting</option>
                            <option>Repairing</option>
                            <option>Painting</option>
                            <option>More</option>

                        </select>

                            <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                                <li className="nav-item">
                                    <p className="nav-link active" onClick={()=>navigate('/')}>Home</p>
                                </li>
                                <li className="nav-item dropdown">
                                    
                                    <ul className="dropdown-menu" aria-labelledby="pages">
                                        <li><p className="dropdown-item" onClick={()=>navigate('about')}>About Us<span
                                            className="badge bg-success text-dark ms-2">PRO</span></p></li>
                                        <li><a href="shop.html" className="dropdown-item">Services<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="single-product.html" className="dropdown-item">Single Product<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="cart.html" className="dropdown-item">Cart<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="wishlist.html" className="dropdown-item">Wishlist<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="checkout.html" className="dropdown-item">Checkout<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="blog.html" className="dropdown-item">Blog<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="single-post.html" className="dropdown-item">Single Post<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="contact.html" className="dropdown-item">Contact<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="faqs.html" className="dropdown-item">FAQs<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="account.html" className="dropdown-item">Account<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="thank-you.html" className="dropdown-item">Thankyou<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="error.html" className="dropdown-item">Error 404<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                        <li><a href="styles.html" className="dropdown-item">Styles<span
                                            className="badge bg-success text-dark ms-2">PRO</span></a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" onClick={()=>navigate('services')}>Services</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" onClick={()=>navigate('about')}>About us</p>
                                    </li><li className="nav-item">
                                    
                                </li>
                                <li className="nav-item">
                                <p className="nav-link" onClick={()=>navigate('contact')}>Contact</p>
                                </li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" onClick={()=>navigate('team')}>Our Workers</p>
                                    </li>
                                    <li className="nav-item"></li>
                                </ul>

                            <div className="d-none d-lg-flex align-items-end">
                                <ul className="d-flex justify-content-end list-unstyled m-0">
                                    <li>
                                        <a href="account.html" className="mx-3">
                                            <iconify-icon icon="healthicons:person"><IoMdPerson  className="fs-4" /></iconify-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html" className="mx-3">
                                            <iconify-icon icon="mdi:heart" className="fs-4"><IoIosBookmark className="fs-4"/></iconify-icon>
                                        </a>
                                    </li>

                                    <li className="">
                                        <a href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                                            aria-controls="offcanvasCart">
                                            <iconify-icon icon="mdi:cart" className="fs-4 position-relative"><FaRegCalendarAlt className="fs-4 position-relative" />
                                            </iconify-icon>
                                            <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                                                03
                                            </span>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </nav>



            </div>
            
        </>
    )
}

export default Navbar
