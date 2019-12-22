import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color:'white'
    }
        
        
    return (
        <header id="header">
				<div class="inner">
                        <Link to='/home' class="logo">
                            Honeyyears
                        </Link>
					{/* <a href="index.html" class="logo">Honeyyears</a> */}
					<nav id="nav">
                        <Link style={navStyle} to='/home'>
                            <li>Home</li>
                        </Link>
                        <Link style={navStyle} to='/about'>
                        <li>About Us</li>
                        </Link>
                        {/* <Link style={navStyle} to='/shop'>
                            <li>Shop</li>
                        </Link> */}
                        <Link style={navStyle} to='/donation'>
                            <li>Donation</li>
                        </Link>
                        
                
					</nav>
				</div>
			</header>
			// <a href="#menu" class="navPanelToggle"><span class="fa fa-bars"></span></a>
        // <nav>
        //     <h3>Logo</h3>
        //     <ul className='nav-links'>
                
        //     </ul>
        // </nav>
    );
}

export default Nav;