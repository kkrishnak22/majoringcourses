import React, { useState } from "react";
import MajoringLogo from "../../assets/majoringicon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <img className="majoring-img" src={MajoringLogo} alt="Majoring Logo" />
          <span>Majoring</span>
        </div>

        <div className="middle-sec">
          <div className="middle-sec-left">
            <input placeholder="Search" 
              
            />
            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
         
            <div className="middle-two">
            <button>Editor</button>
            <button>About Us</button>
          </div>
          </div>
        
        </div>

        <div className="right-nav">
          <button>Profile</button>
          <button>Sign out</button>
        </div>

        {/* Mobile menu icon */}
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <span>&#9776;</span>
        </div>
      </div>

      {/* Mobile menu items */}
      {mobileMenuVisible && (
        <div className="mobile-menu-items">
          <button>Editor</button>
          <button>About Us</button>
          <button>Profile</button>
          <button>Sign out</button>
        </div>
      )}
    </div>
  );
}
