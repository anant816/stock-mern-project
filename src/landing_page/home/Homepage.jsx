import React from 'react'
import HeroSection from './Herosection';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import Education from './Education';

import Openaccount from '../Openaccount';

import Navbar from '../Navbar';
import Footer from '../Footer';


function Homepage() {
  return (
    <>
    {/* <Navbar /> */}
    <HeroSection />
    <Awards />
    <Stats />
    <Pricing />
    
    <Education />
    <Openaccount />
    {/* <Footer /> */}

    </>
  )
}

export default Homepage;