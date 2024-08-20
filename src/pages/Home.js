import React from 'react'

import Hero from '../components/Hero'
import Partners from "../components/Partners"
import Services from '../components/Services'
import Employees from '../components/Employees'
import Animals from '../components/Animals'
import Questions from '../components/Questions';
import Team from '../components/Team'



export default function Home() {
  return (
    <div>
    
        <Hero />
        <Partners/>
        <Services />
        <Employees />
        <Team/>
        <Questions/>
        <Animals />
        
    </div>
  )
}
