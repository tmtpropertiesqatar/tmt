import React from 'react'
import './home.css'
import { HeroSection, ServiceSection, PartnersSection } from '../../containers'
import { Footer } from '../../components'

function home() {
  return (
    <div>
      
      <HeroSection />
      <ServiceSection />
      <PartnersSection />
      <Footer />
    </div>
  )
}

export default home