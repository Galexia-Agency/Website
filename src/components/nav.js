import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './css/nav.scss';
import * as Hammer from "hammerjs";

let app;
let aclose;

class Nav extends React.Component {
    render() {
        return (
            <div className="GlobalHeader">
                <div className="HeaderContainer">
                    <div className="LogoContainer">
                        <div title="Navigation" className="NavbarToggler" onClick={this.appdrawer}>
                            <i className="fa fa-bars TextGradient"></i>
                        </div>
                        <Link className="LogoLink" to="/">
                            <p className="Logo">
                                Galexia                
                            </p>
                        </Link>
                    </div>
                    
                    <div className="NavigationContainer Navmob closed">
                        <nav className="Navigation">
                            <NavLink className="NavLink" id="Home" to="/"  exact={true}>Home</NavLink>
                            <NavLink className="NavLink" id="Photography" to="/Photography">Photography</NavLink>
                            <NavLink className="NavLink" id="Web" to="/Web">Web</NavLink>
                            <NavLink className="NavLink" id="Marketing" to="/Marketing">Marketing</NavLink>
                            <NavLink className="NavLink" id="Blog" to="/Blog">Blog</NavLink>
                            <a className="NavLink" id="ContactLink" href="#Contact">Contact</a>
                            {/* eslint-disable-next-line*/}
                            <div title="CloseNavigation" id="Close" className="closed" onClick={this.appclose}></div>
                        </nav>
                    </div>        
                </div>
            </div>
        )
    };


    /* Mobile Navigation JS */
    appdrawer() {
        if (app.classList.contains('closed') === true){
                aclose.setAttribute("style", "display: block");
                setTimeout(function() {
                    app.classList.remove('closed');
                    app.classList.add('open');
                    aclose.classList.remove('closed');
                    aclose.classList.add('open');
                }, 100);
        } 
        else {
            app.classList.remove('open');
            app.classList.add('closed');
            aclose.classList.remove('open');
            aclose.classList.add('closed');
            setTimeout(
                function() {
                    aclose.setAttribute("style", "display: none");
                }, 900);
        }
    };
    
    appclose() {
        if (app.classList.contains('open') === true){
            app.classList.remove('open');
            app.classList.add('closed');
            aclose.classList.remove('open');
            aclose.classList.add('closed');
            setTimeout(
            function() 
            {
                aclose.setAttribute("style", "display: none");
            }, 900);
        }
    };

    componentDidMount() {
        app = document.querySelector(".Navmob");
        aclose = document.querySelector("#Close");
        aclose.setAttribute("style", "display: none");

        /*Hammer.js Init*/
		var myElement = document.body;
		// create a simple instance
		// by default, it only adds horizontal recognizers
		var mc = new Hammer(myElement);
		// listen to events...
		mc.on("swipeleft", this.appclose);
        mc.on("swiperight", this.appdrawer);

        //Close App Drawer on click
        document.querySelectorAll(".NavLink").forEach((e) => {
            e.addEventListener('click', () => {
              this.appclose()
            });
        });       
        
        // Featherlight Fix
        /*
        * Scrollbar Width Test
        * Adds `featherlight-fix` class to body if scrollbars use up screen real estate
        */
       function featherlightfix() {
            var parent = document.createElement("div");
            parent.setAttribute("style", "width:30px;height:30px;");
            parent.classList.add('scrollbar-test');

            var child = document.createElement("div");
            child.setAttribute("style", "width:100%;height:40px");
            parent.appendChild(child);
            document.body.appendChild(parent);

            // Measure the child element, if it is not
            // 30px wide the scrollbars are obtrusive.
            var scrollbarWidth = 30 - parent.firstChild.clientWidth;
            if(scrollbarWidth) {
                document.documentElement.classList.add("featherlight-fix");
            } else {
                document.documentElement.classList.remove("featherlight-fix");
            }

            document.body.removeChild(parent);
        }
        featherlightfix()
        window.addEventListener('resize', function() {
            featherlightfix()
        })
    }

}

export default Nav;