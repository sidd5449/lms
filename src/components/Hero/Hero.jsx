import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import Illus1 from '../../assets/illus.svg';
import { useAuth0 } from '@auth0/auth0-react';

const Hero = () => {

  const {loginWithPopup, user, isAuthenticated} = useAuth0();

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
          <div className="app__hero-main-left-btns">
            <Link to='courses'>
              <button>
                DashBoard
              </button>

            </Link>
              <button id='signup' onClick={loginWithPopup}>
                Sign Up
              </button>

          </div>
        </div>
        <div className="app__hero-main-right">
          <div className="app__hero-main-right-img">
            <img src={Illus1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero