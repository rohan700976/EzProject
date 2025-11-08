import { useState } from 'react'
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
function App() {


  return (
    <>
     <Header/>
     <Hero/>
     <OurTeam/>
     <AboutUs/>
     <Service/>
     <Portfolio/>
     <Contact/>
     <FilmsProduction/>
     <Branding/>
     <ArtCuration/>
    </>

  )
}

export default App
