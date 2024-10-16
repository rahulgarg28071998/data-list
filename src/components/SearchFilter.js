// SearchFilter.js
import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = () => {
    const [isContactOpen, setContactOpen] = useState(true);
    const [isCompaniesOpen, setCompaniesOpen] = useState(true);

    const toggleSection = (section) => {
        if (section === 'contact') {
            setContactOpen(!isContactOpen);
        } else if (section === 'companies') {
            setCompaniesOpen(!isCompaniesOpen);
        }
    };

    return (
        <div className="search-filter">
            <h2 className="search-title">Search</h2>
            <p className="search-criteria">SEARCH CRITERIA</p>

            <div className="filter-section">
                <div className="filter-header" onClick={() => toggleSection('contact')}>
                    <h3>Contact</h3>
                    <span>{isContactOpen ? '−' : '+'}</span>
                </div>
                {isContactOpen && (
                    <div className="filter-content">
                        <div className="filter-item">
                            <span>Contact Name / Email</span>
                            <span className="edit-icon">✏️</span>
                        </div>
                        <div className="filter-tags">
                            <span className="tag">John</span>
                            <span className="tag">Diana Dong</span>
                        </div>
                        <div className="filter-item">
                            <span>Job Titles</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Management Level</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Department</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Contact Info</span>
                            <span className="edit-icon">✏️</span>
                        </div>
                        <div className="filter-tags">
                            <span className="tag">Agriculture</span>
                            <span className="tag">Services</span>
                            <span className="tag">Finance, Insurance, Real Estate</span>
                            <span className="tag">Retail</span>
                        </div>
                        <div className="filter-item">
                            <span>Contact Accuracy Score</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Status Change</span>
                            <span className="add-icon">+</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="filter-section">
                <div className="filter-header" onClick={() => toggleSection('companies')}>
                    <h3>Companies</h3>
                    <span>{isCompaniesOpen ? '−' : '+'}</span>
                </div>
                {isCompaniesOpen && (
                    <div className="filter-content">
                        <div className="filter-item">
                            <span>Company</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Include list of companies</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Exclude list of companies</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Industry</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Employees size</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Company Revenue</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Certified Companies Only</span>
                            <span className="add-icon">+</span>
                        </div>
                        <div className="filter-item">
                            <span>Business Model</span>
                            <span className="add-icon">+</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchFilter;
