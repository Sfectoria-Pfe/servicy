import React from 'react'
import Lottie from 'react-lottie';
import loading from '../assets/lotties/loading.json';

export default function Fallback() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className=' d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
    />
   
  </div>
  )
}
