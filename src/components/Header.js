import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Settings</h1>
      </div>
      <div className="credits">
        <span className="credits-balance">Credits Balance: <strong>32</strong></span>
        <a href="/buy-more" className="buy-more">Buy more</a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Quick Search" className="search-input" />
        <FontAwesomeIcon icon={faQuestionCircle} className="icon help-icon" />
        <FontAwesomeIcon icon={faBell} className="icon notification-icon" />
        <div className="user-avatar">DL</div>
      </div>
    </div>
  );
};

export default Header;
