import './HerosectionStyles.css';
import hero from '../assets/images/restauranfood.jpg'

function Herosection() {
    return (
        <>
            <div className='grid-container'>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional receipes served with modern twist.</p>
                    <button type="submit">Reserve Table</button>
                </div>
                <div>
                    <img className="hero-image" src={hero} alt="Hero Image"></img>
                </div>
            </div>
        </>
    );
}

export default Herosection;