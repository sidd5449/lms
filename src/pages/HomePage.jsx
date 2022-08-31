import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import HNav from '../components/HNav/HNav';

const HomePage = () => {
  return (
    <div className='app__home'>
      <HNav />
      <Hero />

    </div>
  )
}

export default HomePage