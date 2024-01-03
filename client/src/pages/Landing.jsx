import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Choose from '../components/Choose'
import About from '../components/About'
import Devices from '../components/Devices'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const Landing = () => {
  return (
    <div className='pt-[10%]'>
        <Navbar/>
        <Hero/>
        <Services/>
        <Choose/>
        <About/>
        <Devices/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Landing