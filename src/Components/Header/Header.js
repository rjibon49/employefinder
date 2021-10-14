import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-title">Find Best Employee</h1>
            <div className="header-details">
                <p>Find the right candidate for your open position with Relevate Talent Search.</p>
                <p> Browse through our talent database of job candidates and Hire.</p>
            </div>
            <h2 className="header-budget"> Budget $4000</h2>
        </div>
    );
};

export default Header;