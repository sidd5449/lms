import React from 'react';
import './Navbar.scss';
import { FiBookOpen, FiBookmark, FiSend, FiLayout, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 
import { logout } from '../../utils/fbConfig';

const Navbar = () => {
  return (
    <div className="app__navbar">
        <h3>EduCater</h3>
        <div className="app__navbar-menu">
            
              <Link to="/courses">
                <div className="menu-item">
                  <FiLayout
                    color='var(--tertiary-color)'
                    size={20}
                    
                  
                  />
                  <p>Dashboard</p>
                </div>
                
              </Link>
            
            
              <Link to="/">
                <div className="menu-item">
                  <FiBookmark
                    color='var(--tertiary-color)'
                    size={20}
                    
                  
                  />
                  <p>Bookmarks</p>
                </div>
                
              </Link>
            
              <Link to="/">
                <div className="menu-item">
                  <FiSend
                    color='var(--tertiary-color)'
                    size={20}
                    
                  
                  />
                  <p>Submissions</p>
                </div>
                
              </Link>
              <div className="logout">
                <a href="/" onClick={logout}>
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