import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

import logo from '../components/images/Logo.jpg';
import {
  AccountCircle as ProfileIcon
} from '@mui/icons-material';

function UserNav() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="Navbar">
            <img src={logo} alt="Farm2Factory Logo" className="Navbar-logo" />
            <ul className="Navbar-links">
                <li>
                    <Link to='/UserLand'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/UserAbout'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/userpro'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to='/UserContact'>
                        Contact
                    </Link>
                </li>
                <li className="Profile-dropdown">
                    <ProfileIcon className="Profile-icon" onClick={toggleDropdown} />
                    {dropdownOpen && (
                        <div className="Dropdown-menu">
                            <li><Link to='/'>Logout</Link></li>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default UserNav;
