import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Your Sidebar component
import Header from './components/Header'; // Your Header component
import SubscriptionPlans from './components/SubscriptionPlans';
import PaymentMethods from './components/PaymentMethods';
import ProfilePage from './components/ProfilePage';
import NotificationsPage from './components/NotificationsPage';
import UserManagementPage from './components/UserManagementPage';
import ReferralPage from './components/ReferralPage';
import SidebarMenu from './components/SidebarMenu';
import SearchFilter from './components/SearchFilter';
import ContactManagement from './components/ContactManagement';

import './App.css'; // Global app styles

const App = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true); // Toggle the search filter on click
  };

  return (
    <Router>
      <div className="app-container">
        <SidebarMenu onSearchClick={handleSearchClick}/>
        {/* <Sidebar /> */}
        {!isSearchOpen && <Sidebar />}
        {isSearchOpen && <SearchFilter />}
        {isSearchOpen && <ContactManagement />}
        {!isSearchOpen && <div className="main-content">
          <Header />
          <div className="content-area">
            <Routes>
              <Route path="/my-profile" element={<ProfilePage />} />
              <Route path="/subscription-plans" element={<SubscriptionPlans />} />
              <Route path="/payment-methods" element={<PaymentMethods />} />
              <Route path="/user-management" element={<UserManagementPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/referrals" element={<ReferralPage />} />
            </Routes>
          </div>
        </div>}
      </div>
    </Router>
  );
};

export default App;
