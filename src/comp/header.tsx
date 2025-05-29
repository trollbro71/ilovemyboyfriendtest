import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="gray-header">
      <div className="header-content">
        <img src="header.jpg" alt="Profile" className="header-photo" />
        <div className="header-text">pissbowl</div>
      </div>
    </header>
  );
};

export default Header;