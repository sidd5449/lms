import React from 'react';
import './HNav.scss';

const HNav = () => {
  return (
    <div className="app__hero-navbar">
        <div className="app__hero-navbar-logo">
          <h3 id='title'>EduCater</h3>
        </div>
        <div className="app__hero-navbar-menu">
          <a href="/"><p>Home</p></a>
          <a href="/courses"><p>Dashboard</p></a>
        </div>
      </div>
  )
}

export default HNav