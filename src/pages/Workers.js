import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import pic from '../assets/images/plum.jpeg'
import picc from '../assets/images/plumberrr.jpeg'
import poc from '../assets/images/plumbree.jpeg'
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from 'react-bootstrap/Card';
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

export default function Workers() {
    return (

        <div style={{ marginBottom: 100 }}>
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner text-center">
                                <div className="breadcrumb_iner_item">
                                    <h2>Our Workers</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop spad">
                <div className="container mt-5">
                    <div className=" d-flex">
                        <div className="row">
                            <div className="col-lg-15">
                                <div className="shop__sidebar">
                                    <div className="shop__sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <button type="submit"><span className="icon_search"></span></button>
                                        </form>
                                    </div>
                                    <div className="shop__sidebar__accordion ">
                                        <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen>

                                            <Accordion.Item eventKey="0">

                                                <div className="card " >

                                                    <div className="card-heading">
                                                        <Accordion.Header> <a >Categories</a></Accordion.Header>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                        <AccordionBody>
                                                            <div className="card-body ">
                                                                <div className="shop__sidebar__categories">
                                                                    <ul className="nice-scroll">
                                                                        <li><a href="#">Maintenance and repair</a></li>
                                                                        <li><a href="#">Drivers</a></li>
                                                                        <li><a href="#">Multimedia and IT</a></li>
                                                                        <li><a href="#">Household Appliance Repair</a></li>
                                                                        <li><a href="#">Animal care</a></li>
                                                                        <li><a href="#">Housekeeping and Cleaning</a></li>
                                                                        <li><a href="#">Beauty and well-being</a></li>
                                                                        <li><a href="#">Health</a></li>
                                                                        <li><a href="#">Coaching and training</a></li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionBody>


                                                    </div>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">

                                                <div className="card">
                                                    <div className="card-heading">
                                                        <AccordionHeader><a>Rating</a></AccordionHeader>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                                        <AccordionBody>
                                                            <div className="card-body">
                                                                <div className="shop__sidebar__brand">
                                                                    <ul>
                                                                        <li><a href="#">5 stars</a></li>
                                                                        <li><a href="#">4 stars</a></li>
                                                                        <li><a href="#">3 stars</a></li>
                                                                        <li><a href="#">2 stars</a></li>
                                                                        <li><a href="#">1 star</a></li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionBody>

                                                    </div>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">

                                                <div className="card">
                                                    <div className="card-heading">
                                                        <AccordionHeader><a>Filter Price</a></AccordionHeader>
                                                    </div>
                                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                                        <AccordionBody>
                                                            <div className="card-body">
                                                                <div className="shop__sidebar__price">
                                                                    <ul>
                                                                        <li><a href="#">$0.00 - $50.00</a></li>
                                                                        <li><a href="#">$50.00 - $100.00</a></li>
                                                                        <li><a href="#">$100.00 - $150.00</a></li>
                                                                        <li><a href="#">$150.00 - $200.00</a></li>
                                                                        <li><a href="#">$200.00 - $250.00</a></li>
                                                                        <li><a href="#">250.00+</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionBody>

                                                    </div>
                                                </div>
                                            </Accordion.Item>
                                            <AccordionItem eventKey="3">
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <AccordionHeader><a>Verified Workers</a></AccordionHeader>
                                                    </div>
                                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                                        <AccordionBody>
                                                            <div className="card-body">
                                                                <div className="shop__sidebar__price">
                                                                    <ul>
                                                                        <li><a href="#">Pro workers</a></li>
                                                                        <li><a href="#">Workers</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionBody>

                                                    </div>
                                                </div>
                                            </AccordionItem>
                                            <Accordion.Item eventKey="4">

                                                <div className="card " >

                                                    <div className="card-heading">
                                                        <Accordion.Header> <a >Location</a></Accordion.Header>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                        <AccordionBody>
                                                            <div className="card-body ">
                                                                <div className="shop__sidebar__categories">
                                                                    <ul className="nice-scroll">
                                                                        <li><a href="#">Tunis </a></li>
                                                                        <li><a href="#">Gabes</a></li>
                                                                        <li><a href="#">Sousse</a></li>
                                                                        <li><a href="#">Monastir</a></li>
                                                                        <li><a href="#">Sfax</a></li>
                                                                        <li><a href="#">Nabeul</a></li>
                                                                        <li><a href="#">Gafsa</a></li>
                                                                        <li><a href="#">Djerba</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </AccordionBody>


                                                    </div>
                                                </div>
                                            </Accordion.Item>
                                        </Accordion>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div class="col-lg-10 col-md-15 col-sm-15">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" >
                                        <div className='d-flex gap-2'>
                                            <IoIosArrowRoundForward /><h4>Plumbers</h4>
                                        </div>
                                        <div className='d-flex gap-4'>
                                            <div>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img src={pic} alt="" height={150} width={150} style={{ objectFit: "cover", objectPosition: "40% 24%" }} />
                                                    <Card.Body>
                                                        <Card.Title>Laura Abraham</Card.Title>
                                                        <Card.Text>
                                                            + Add To Cart
                                                        </Card.Text>
                                                        <div class="rating">
                                                            <RiStarSFill />
                                                            <RiStarSFill />
                                                            <RiStarSFill />
                                                            <RiStarSFill />
                                                            <RiStarSLine />

                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img src={poc} alt="" height={150} width={150} style={{ objectFit: "cover", objectPosition: "40% 24%" }} />
                                                    <Card.Body>
                                                        <Card.Title>kristopher garden</Card.Title>
                                                        <Card.Text>
                                                            + Add To Cart
                                                        </Card.Text>
                                                        <div class="rating">
                                                            <RiStarSFill />
                                                            <RiStarSFill />
                                                            <RiStarSFill />
                                                            <RiStarSLine />
                                                            <RiStarSLine />

                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img src={picc} alt="" height={150} width={150} style={{ objectFit: "cover", objectPosition: "40% 24%" }} />
                                                    <Card.Body>
                                                        <Card.Title>David guetta</Card.Title>
                                                        <Card.Text>
                                                            + Add To Cart
                                                        </Card.Text>
                                                        <div class="rating">
                                                            <RiStarSFill />
                                                            <RiStarSFill />
                                                            <RiStarSLine />
                                                            <RiStarSLine />
                                                            <RiStarSLine />

                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>

                                        </div>
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
