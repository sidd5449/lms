import React from 'react';
import './Navbar.scss';
import { FiBookOpen, FiBookmark, FiSend } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="app__navbar-menu">
            <a href="/">
              <FiBookOpen
                color='aliceblue'
              
              />
            </a>
            <a href="/">
              <FiBookmark
                color='aliceblue'
              />
            </a>
            <a href="/">
              <FiSend 
                color='aliceblue'
              />
            </a>
        </div>
    </div>
  )
}

export default Navbar