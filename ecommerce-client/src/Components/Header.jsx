import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return(
        <nav className='header'>
            <Link to="/" className='logo'>
            <h2>E-Commerce</h2>
            </Link>
            <div>
                <Link to="/cart" className='nav-link'>Cart</Link>
                <Link to="/login" className='nav-link'>Login</Link>
            </div>
        </nav>
    )
}

export default Header;
