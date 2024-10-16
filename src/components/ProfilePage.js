// ProfilePage.js
import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <h2>Your Profile</h2>
            <p>Manage your profile details and settings here.</p>

            <div className="profile-details">
                <div className="profile-picture">
                    <img src="https://via.placeholder.com/150" alt="Profile" />
                </div>
                <div className="profile-info">
                    <h3>John Doe</h3>
                    <p>Email: john.doe@example.com</p>
                    <p>Phone: +1 (234) 567-890</p>
                    <p>Location: New York, USA</p>
                </div>
            </div>

            <div className="profile-settings">
                <h3>Settings</h3>
                <button className="edit-button">Edit Profile</button>
                <button className="change-password">Change Password</button>
                <button className="delete-account">Delete Account</button>
            </div>
        </div>
    );
};

export default ProfilePage;
