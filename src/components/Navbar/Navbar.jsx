import React from 'react';
import './Navbar.scss';
import { FiBookOpen, FiBookmark, FiSend, FiLayout, FiBook, FiLogOut } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="app__navbar">
        <h3>LMS</h3>
        <div className="app__navbar-menu">
            
              <a href="/">
                <div className="menu-item">
                  <FiLayout
                    color='var(--tertiary-color)'
                    size={20}
                    
                  
                  />
                  <p>Dashboard</p>
                </div>
                
              </a>
            
              <a href="/">
                <div className="menu-item">
                  <FiBookOpen
                    color='var(--tertiary-color)'
                    size={20}
                    
                  
                  />
                  <p>Courses</p>
                </div>
                
              </a>
            
              <a href="/">
                <div className="menu-item">
                  <FiBookmark
                    color='var(--tertiary-color)'
                    size={20}
                    
                  
                  />
                  <p>Bookmarks</p>
                </div>
                
              </a>
            
              <a href="/">
                <div className="menu-item">
                  <FiSend
                    color='var(--tertiary-color)'
                    size={20}
                    
                  
                  />
                  <p>Submissions</p>
                </div>
                
              </a>
              <div className="logout">
                <a href="">
                  <div className="menu-item">
                    <FiLogOut 
                      color='#fc0303'
                      size={20}
                    
                    />
                    <p>Logout</p>
                  </div>
                </a>
              </div>
        </div>
        
    </div>
  )
}

export default Navbar