import './styles/FooterStyles.css';
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footer-logo.png";
import menucard from "../assets/images/MenuCard.PNG";

function Footer() {
    return (
        <footer>
            <article className='footer-container'>
                <section className='footer-item'>
                    <img
                        className='footer-logo'
                        src={footerLogo}
                        alt="Little Lemon logo"
                    ></img>
                </section>
                <section className='footer-item'>
                    <h3>NAVIGATION</h3>
                    <ul>
                        <li><Link className="text-color" to="/">Home</Link></li>
                        <li><a className="text-color" href="#about_section">About</a></li>
                        <li><Link className='text-color' to="/menupage">Menu</Link></li>
                        <li><Link className="text-color" to="/booking">Reservations</Link></li>
                        <li><Link className="text-color" to="/orderpage">Order Online</Link></li>
                        <li><Link className="text-color" to="/login">Login</Link></li>
                    </ul>
                </section>
                <section className='footer-item'>
                    <h3>CONTACT</h3>
                    <ul>
                        <li>2395 Maldove Way,</li>
                        <li>Chicago Illinois</li>
                        <li>(629)-243-6827</li>
                        <li><a
                            href="mailto: info@littlelemon.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-color"
                            >
                            info@littlelemon.com
                            </a>
                        </li>
                    </ul>
                </section>
                <section className='footer-item'>
                    <h3>SOCIAL MEDIA LINKS</h3>
                    <ul>
                        <li><a
                                href="https://www.facebook.com/thelittlelemonshop/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-color"
                                >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/littlelemonmoon/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-color"
                                >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </footer>
    );
}

export default Footer;