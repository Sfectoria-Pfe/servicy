import React from 'react';
import logo1 from '../assets/images/1.png';
import logo2 from '../assets/images/2.png';
import logo3 from '../assets/images/3.png';
import logo4 from '../assets/images/4.png';
import logo5 from '../assets/images/5.png';
import Marquee from "react-fast-marquee";
import '../App.css';




function Prestataires() {
	return (
		<div className='bg-light py-5  ' style={{marginTop:80}}>
			<Marquee>


				<div class="container ">


					<div class="d-flex flex-wrap justify-content-between gap-4 align-items-center ">
						<div class="single-logo-item">
							<img src={logo1} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item " >
							<img src={logo2} alt="" height={90} width={90} />
						</div>
						<div class="single-logo-item">
							<img src={logo3} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item">
							<img src={logo4} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item">
							<img src={logo5} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item">
							<img src={logo1} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item">
							<img src={logo2} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item">
							<img src={logo1} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item " >
							<img src={logo2} alt="" height={90} width={90} />
						</div>
						<div class="single-logo-item">
							<img src={logo3} alt="" height={90} width={90}/>
						</div>
						<div class="single-logo-item">
							<img src={logo4} alt="" height={90} width={90}/>
						</div>
					
					

					</div>

				</div>
			</Marquee>
		</div>
	)
}

export default Prestataires
