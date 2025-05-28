import React from 'react';
import './header.css'; // We'll create this CSS file next

interface HeaderProps {
  photoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ photoUrl }) => {
  return (
    <header className="gray-header">
      <div className="header-content">
        {photoUrl && <img src={photoUrl} alt="Profile" className="header-photo" />}
        <div className="header-text">pissbowl</div>
      </div>
    </header>
  );
};

export default Header;