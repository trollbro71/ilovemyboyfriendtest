import React from 'react';
import './header.css';
import headerPhoto from '../assets/header.jpg';

const Header: React.FC = () => {
  return (
    <header className="gray-header">
      <div className="header-content">
        <img src={headerPhoto} alt="Profile" className="header-photo" />
        <div className="header-text">pissbowl</div>
      </div>
    </header>
  );
};

export default Header;