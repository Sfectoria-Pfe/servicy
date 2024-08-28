import React from "react";
import logo1 from "../assets/images/1.png";
import logo2 from "../assets/images/2.png";
import logo3 from "../assets/images/3.png";
import logo4 from "../assets/images/4.png";
import logo5 from "../assets/images/5.png";
import Marquee from "react-fast-marquee";
import "../App.css";

function Partners() {
  return (
    <div className="bg-light py-5 px-5 " style={{ marginTop: 80 }}>
      <Marquee pauseOnHover="true" gradient="true" gradientColor="#F8F8F8">
        <div className="d-flex gap-5">
          <img src={logo1} alt="" width={90} height={90} />

          <img src={logo2} alt="" width={90} height={90}/>

          <img src={logo3} alt="" width={90} height={90}/>

          <img src={logo4} alt="" width={90} height={90}/>

          <img src={logo5} alt="" width={90} height={90}/>

          <img src={logo1} alt="" width={90} height={90}/>

          <img src={logo2} alt="" width={90} height={90}/>

          <img src={logo3} alt="" width={90} height={90}/>

          <img src={logo4} alt="" width={90} height={90}/>
          <img src={logo5} alt="" width={90} height={90}/>
		  <div style={{ width: 20 }}></div>
        </div>
      </Marquee>
    </div>
  );
}

export default Partners;
