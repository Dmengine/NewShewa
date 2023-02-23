import React from 'react'
import newBg from './assets/newBg.png'
import './landingScreen.css'
import Button from './Button'

export const LandingScreen = () => {
  return (
    <div style={{ 
        backgroundImage: `url(${newBg})`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '100%',
        height: 800,
        overflow: 'hidden',
        position: 'fixed'
      }} className='Ascreen' >
       <div className='text-white font-bold mb-7 text-3xl '><h1>WHEYTOON</h1></div>
       <div className='justify-center text-center flex '><Button /></div>
       <h4 className='text-white mt-7'>Register</h4>
      </div>
  )
}


export default LandingScreen;