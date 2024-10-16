// SidebarMenu.js
import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({onSearchClick}) => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-header">
                <span className="user-initials">DL</span>
            </div>
            <div className="sidebar-icons">
                <div className="sidebar-item active">
                    <span role="img" aria-label="home">🏠</span> {/* Home Icon */}
                </div>
                <div className="sidebar-item">
                    <span role="img" aria-label="profile">👤</span> {/* Profile Icon */}
                </div>
                <div className="sidebar-item">
                    <span role="img" aria-label="search" onClick={onSearchClick}>🔍</span> {/* Search Icon */}
                </div>
                <div className="sidebar-item">
                    <span role="img" aria-label="database">💾</span> {/* Database Icon */}
                </div>
                <div className="sidebar-item">
                    <span role="img" aria-label="connections">🔗</span> {/* Connections Icon */}
                </div>
                <div className="sidebar-item">
                    <span role="img" aria-label="target">🎯</span> {/* Target Icon */}
                </div>
                <div className="sidebar-item">
                    <span role="img" aria-label="brain">🧠</span> {/* Brain Icon */}
                </div>
                <div className="sidebar-item">
                    <span role="img" aria-label="money">💰</span> {/* Money Icon */}
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
