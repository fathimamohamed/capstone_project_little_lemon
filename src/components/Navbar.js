import logo from '../assets/images/logo.png';
import {useState} from 'react';
import './NavbarStyles.css';
import Hamburger from "../assets/images/hamburger.png";
import Close from "../assets/images/close.png";


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
        setNavbarOpen(!navbarOpen);
    }
    return (
        <>
        <nav>
            <img
                className="logo"
                src={logo}
                alt="Logo of Little Lemon">
            </img>

            <div className="links">
                <ul id="navbar" className={navbarOpen ? "#navbar active" : "#navbar"}>
                    <li>
                        <a className="active" href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="index.html">About</a>
                    </li>
                    <li>
                        <a href="index.html">Menu</a>
                    </li>
                    <li>
                        <a href="index.html">Reservations</a>
                    </li>
                    <li>
                        <a href="index.html">Order Online</a>
                    </li>
                    <li>
                        <a href="index.html">Login</a>
                    </li>
                </ul>
            </div>

            <div id="mobile" onClick={handleToggle}>
                <i id="bar"
                    className={navbarOpen ? "fas fa-times" : "fas fa-bars"}>
                </i>
            </div>
        </nav>
        </>
    )
}

export default Navbar;