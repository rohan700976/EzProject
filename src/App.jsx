import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './home/Header'
import Hero from './home/Hero'
import OurTeam from './pages/OurTeam'
import AboutUs from './pages/AboutUs'
import Service from './services/Service'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import FilmsProduction from './services/FilmsProduction'
import Branding from './services/Branding'
import ArtCuration from './services/ArtCuration'
import ServiceWrapper from './services/ServiceWrapper'
function App() {


  return (
    <>
     <Header/>
     <Hero/>
     <OurTeam/>
     <AboutUs/>
     <ServiceWrapper/>
     <Portfolio/>
     <Contact/>
    </>

  )
}

export default App
