import React from "react";
import "./Layout.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const activeClass = ({ isActive }) => {
        return isActive ? "navbarName active" : "navbarName";
    };

    return (
        <div className="container-fluid">

        <div className="container">
            <nav className="navbar_section">
                {/* Logo Section */}
                <div className="Card_logo">
                    <img
                        src="./image/cardlogo.jpg"
                        className="image_logo"
                        alt="Cards"
                    />
                </div>
                
                {/* Navigation Links */}
                <ul className="inner_ul_navbar">
                    <li>
                        <NavLink className={activeClass} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={activeClass} to="/Cards">
                            Cards
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={activeClass} to="/CardsRedux">
                            Redux Cards
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
            {/* Main Content */}
            <Outlet />
            
            {/* Footer */}
            <footer className="footer">
                This is Footer
            </footer>
        </div>
                        </div>
    );
};

export default Layout;
