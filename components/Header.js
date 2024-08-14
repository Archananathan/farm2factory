import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

import logo from './images/Logo.jpg';
import {
  AccountCircle as ProfileIcon
} from '@mui/icons-material';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="Navbar">
            <img src={logo} alt="Farm2Factory Logo" className="Navbar-logo" />
            <ul className="Navbar-links">
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/About'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/Products'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to='/Contact'>
                        Contact
                    </Link>
                </li>
                <li className="Profile-dropdown">
                    <ProfileIcon className="Profile-icon" onClick={toggleDropdown} />
                    {dropdownOpen && (
                        <div className="Dropdown-menu">
                            <li><Link to='/UserLogin'>User</Link></li>
                            <li><Link to='/AdminLogin'>Admin</Link></li>
                            <li><Link to='/IndustryLogin'>Industry</Link></li>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Header;
