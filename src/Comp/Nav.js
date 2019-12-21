import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color:'white'
    }
        
        
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/Shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/intro'>
                    <li>Intro</li>
                </Link>
                <Link style={navStyle} to='/Home'>
                    <li>Home</li>
                </Link>
                
            </ul>
        </nav>
    );
}

export default Nav;