import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Import your refined CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-header">
        <div className="avatar">DL</div>
        <h3>Settings</h3>
      </div> */}
      <div className="menu">
        <ul>
          <li>
            <Link to="/my-profile">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span>My Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/subscription-plans">
              <FontAwesomeIcon icon={faCog} className="icon" />
              <span>Subscription Plans</span>
            </Link>
          </li>
          <li>
            <Link to="/payment-methods">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>Payment Methods</span>
            </Link>
          </li>
          <li>
            <Link to="/user-management">
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <span>User Management</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <FontAwesomeIcon icon={faBell} className="icon" />
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/referrals">
              <FontAwesomeIcon icon={faBell} className="icon" />
              <span>Referals</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
