import React from 'react';
import { Link } from "react-router-dom";

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
                    <Link className="NavLink" id="Home" to="/">Home</Link>
                    <Link className="NavLink" id="Photography" to="/Photography">Photography</Link>
                    <Link className="NavLink" id="Web" to="/Web">Web</Link>
                    <Link className="NavLink" id="Marketing" to="/Marketing">Marketing</Link>
                    <Link className="NavLink" id="Blog" to="/Blog">Blog</Link>
                </nav>
            </div>        
            </div>
        </div>
    )
} 

export default Nav;