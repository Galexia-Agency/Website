import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './css/nav.scss';

function Nav() {
    return (
        <div className="GlobalHeader">
            <div className="HeaderContainer">
            <div className="LogoContainer">
                <Link className="LogoLink" to="/">
                    <p className="Logo">
                        Galexia                
                    </p>
                </Link>
            </div>
            
            <div className="NavigationContainer">
                <nav className="Navigation">
                    <NavLink className="NavLink" id="Home" to="/"  exact={true}>Home</NavLink>
                    <NavLink className="NavLink" id="Photography" to="/Photography">Photography</NavLink>
                    <NavLink className="NavLink" id="Web" to="/Web">Web</NavLink>
                    <NavLink className="NavLink" id="Marketing" to="/Marketing">Marketing</NavLink>
                    <NavLink className="NavLink" id="Blog" to="/Blog">Blog</NavLink>
                </nav>
            </div>        
            </div>
        </div>
    )
} 

export default Nav;