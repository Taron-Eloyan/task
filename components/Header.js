import React from 'react';
import logo from './logo.png';
import search from './search.png';
import './Header.css';


const Header = () => {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo"/>
    </div>
  )
}


export default Header;
