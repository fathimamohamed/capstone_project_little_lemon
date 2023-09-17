import './SpecialsStyles.css';
import greekSalad from '../assets/images/greek-salad.jpg';
import lemonDessert from '../assets/images/lemon-dessert.jpg';
import bruchetta from '../assets/images/bruchetta.svg';
import orderImage from '../assets/images/delivery-scooter.png';

function Specials () {
    return (
        <main>
            <section className='Heading'>
                <h1>This weeks Specials!</h1>
                <button type="submit">Online Menu</button>
            </section>
            <article className='cards'>
                <section className='card'>
                    <div>
                        <img className="specials-img" src={greekSalad} alt="greek Salad"></img>
                        <div className='header'>
                            <span className='title'>Greek Salad</span>
                            <span className='price'>$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <a href="index.html">
                            Order a delivery
                        </a>
                        <img className="delivery-icon" src={orderImage} alt="delivery scooter image"></img>
                    </div>
                </section>
                <section className='card'>
                    <div>
                        <img className="specials-img" src={bruchetta} alt="Bruchetta"></img>
                        <div className='header'>
                            <span className='title'>Bruchetta</span>
                            <span className='price'>$5.99</span>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <a href="index.html">
                            Order a delivery
                        </a>
                        <img className="delivery-icon" src={orderImage} alt="delivery scooter image"></img>
                    </div>
                </section>
                <section className='card'>
                    <div>
                        <img className="specials-img" src={lemonDessert} alt="Lemon Dessert"></img>
                        <div className='header'>
                            <span className='title'>Lemon Dessert</span>
                            <span className='price'>$5.00</span>
                        </div>
                        <p>This comes straight from grandma&#8217;s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a href="index.html">
                            Order a delivery
                        </a>
                        <img className="delivery-icon" src={orderImage} alt="delivery scooter image"></img>
                    </div>
                </section>
            </article>
        </main>
        /*<h1>This is Specials section</h1>
        <div className="cards">
            <div className="card">
                <div>
                <img className="specials-img" src={greekSalad} alt="greek Salad"></img>
                <div className='header'>
                    <span className='title'>Greek Salad</span>
                    <span className='price'>$12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <a href="index.html">
                    Order a delivery
                    <img src={orderImage} alt="delivery scooter image"></img>
                </a>
                </div>
            </div>
            <div className="card">
            <img src={greekSalad} alt="greek Salad"></img>
                <div>
                    <span>Greek Salad</span>
                    <span>$12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <a href="index.html">
                    Order a delivery
                    <img src={orderImage} alt="delivery scooter image"></img>
                </a>
            </div>
            <div className="card">
            <img src={greekSalad} alt="greek Salad"></img>
                <div>
                    <span>Greek Salad</span>
                    <span>$12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <a href="index.html">
                    Order a delivery
                    <img src={orderImage} alt="delivery scooter image"></img>
                </a>
            </div>
            
        </div>*/
        
    );
}

export default Specials;