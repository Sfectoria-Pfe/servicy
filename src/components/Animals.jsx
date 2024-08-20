import React from 'react'
import Image from '../assets/images/image.jpg'
import Image1 from '../assets/images/insta1.png'
import Image2 from '../assets/images/insta3.jpg'
import Image3 from '../assets/images/insta4.jpg'
import Image4 from '../assets/images/insta5.jpg'
import Image5 from '../assets/images/insta6.webp'
function Animals() {
  return (
    <>
      <section id="insta" className="" style={{marginTop:80,marginBottom:80}}>
        <div className="d-flex g-0 py-5">
          <div className="instagram-item  text-center ">


            <img src={Image} alt="insta-img" className="img-fluid rounded-3" width={470} height={470} />

          </div>
          <div className="instagram-item  text-center ">


          <img src={Image1} alt="insta-img" className="img-fluid rounded-3" width={400} height={400} />


          </div>
        
          <div className="instagram-item  text-center ">


            <img src={Image2} alt="insta-img" className="img-fluid rounded-3" width={379} height={379} />

          </div>
          <div className="instagram-item  text-center ">


            <img src={Image3} alt="insta-img" className="img-fluid rounded-3" width={405} height={405} />

          </div>
          <div className="instagram-item  text-center ">


            <img src={Image4} alt="insta-img" className="img-fluid rounded-3" width={385} height={385} />

          </div>
          <div className="instagram-item  text-center ">


            <img src={Image5} alt="insta-img" className="img-fluid rounded-3" width={450} height={450} />

          </div>
        </div>
      </section>
    </>
  )
}

export default Animals
