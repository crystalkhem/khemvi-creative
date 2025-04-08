import React from 'react'
import Hero from '../../sections/Hero'
import About from '../../sections/About'
import CustomCode from '../../sections/CustomCode'
import Contact from '../../sections/Contact'
import Services from '../../sections/Services'
import Project from '../../sections/Project'

const page = () => {
  return (
    <div>
    <Hero />
    
    <About />
    <Project />
    <Services />
    <CustomCode />
    <Contact />
    </div>
  )
}

export default page