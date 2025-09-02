import React from 'react'

function HeroSection() {
  return (
    <div className='container p-5 mb-5'>
        <div className='row text-center'>
           <img src="/media/Images/homeHero.png" alt="home" className='mb-5'/>
            <h1 className='mt-5'>welcome to grow and invest your wealth</h1>
            <p>Join us in building a brighter financial future.</p>
            <button className='p-2 btn btn-primary' style={{width:'20%',margin: "0 auto"}} >sign up</button>
        </div>
     
    </div>
  )
}

export default HeroSection;