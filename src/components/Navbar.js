import logo from '../assets/images/logo.png';
import {useState} from 'react';
import './styles/NavbarStyles.css';
import { Link } from "react-router-dom";
import menucard from "../assets/images/MenuCard.PNG"

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
                        <Link to="/" ><a className="active" href="/">Home</a></Link>
                    </li>
                    <li>
                        <Link to='/aboutpage' ><a href="/aboutpage">About</a></Link>
                    </li>
                    <li>
                        <Link to='/menupage' ><a href="/menupage">Menu</a></Link>
                    </li>
                    <li>
                        <Link to="/booking" ><a href="/booking">Reservations</a></Link>
                    </li>
                    <li>
                        <Link to="/orderpage" ><a href="/orderpage">OrderOnline</a></Link>
                    </li>
                    <li>
                        <Link to="/loginpage" ><a href="/loginpage">Login</a></Link>
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