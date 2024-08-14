import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';
import logo from '../components/images/Logo.jpg'; 
import { AccountCircle as ProfileIcon } from '@mui/icons-material';

function IndustryNav() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="Navbar">
            <img src={logo} alt="Farm2Factory Logo" className="Navbar-logo" />
            <ul className="Navbar-links">
                <li><Link to='/IndustryLand'>Home</Link></li>
                <li><Link to='/IndustryAbout'>About Us</Link></li>
                <li><Link to='/IndustryProducts'> Products</Link></li>
                <li><Link to='/IndustryContact'> Contact</Link></li>
                <li className="Profile-dropdown">
                    <ProfileIcon className="Profile-icon" onClick={toggleDropdown} />
                    {dropdownOpen && (
                        <div className="Dropdown-menu">
                            <Link to='/'><li>Logout</li></Link>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default IndustryNav;
