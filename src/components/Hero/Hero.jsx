import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="app__hero">
      <div className="app__hero-navbar">
        <div className="app__hero-navbar-logo">
          <h3 id='title'>EduCater</h3>
        </div>
        <div className="app__hero-navbar-menu">
          <a href="/"><p>Home</p></a>
          <a href="/courses"><p>Dashboard</p></a>
        </div>
      </div>
      <div className="app__hero-main">
        <div className="app__hero-main-left">
          <h1 id='title-main'><span>EduCater</span> - LMS</h1>
          <p>An efficient Learning Management System for all your online education needs!</p>
          <div className="app__hero-main-left-icons">
            <Link to='courses'>
              <button>
                DashBoard
              </button>

            </Link>
            <Link to='courses'>
              <button>
                Sign Up
              </button>

            </Link>
          </div>
        </div>
        <div className="app__hero-main-right"></div>
      </div>
    </div>
  )
}

export default Hero