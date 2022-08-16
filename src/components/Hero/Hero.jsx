import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="app__hero">
      <div className="app__hero-left">
        <h1>An Effective LMS Solution</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

        <div className="button-group">
          <a href="/login"><button>Get Started</button></a>
          <a href="/courses" ><button id='secondary'>Go to Dashboard</button></a>
        </div>
      </div>
      <div className="app__hero-right"></div>
    </div>
  )
}

export default Hero