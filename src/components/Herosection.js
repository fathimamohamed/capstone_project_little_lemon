import './styles/HerosectionStyles.css';
import hero from '../assets/images/restauranfood.jpg'
import { Link } from "react-router-dom";

function Herosection() {
    return (
        <>
            <div className='grid-container'>
                <div className='full-width'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional receipes served with modern twist.</p>
                    <Link to="/booking"><button type="submit">Reserve Table</button></Link>

                </div>
                <div className='hero-mobile'>
                    <img className="hero-image" src={hero} alt="Hero Image"></img>
                </div>
            </div>
        </>
    );
}

export default Herosection;