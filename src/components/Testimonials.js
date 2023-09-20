import './styles/TestimonialsStyles.css';
import star from '../assets/images/star';
import person1 from '../assets/images/person_1';
import person2 from '../assets/images/person_2';
import person3 from '../assets/images/person_3';
import person4 from '../assets/images/person_4';

function Testimonials() {
    return (
        <main className='testimonials-main'>
            <section className='testimonials-Heading'>
                <h1>Testimonials</h1>
            </section>
            <article className='testimonials-cards'>
                <section className='testimonials-card'>
                    <div>
                        <img className="user-img" src={person1} alt="user pic"></img>
                        <h4>Leonel</h4>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>

                        <p>This restaurant served as a perfect dinner for me after a
                        long night of studying. I would definitely order from here again!</p>
                    </div>
                </section>
                <section className='testimonials-card'>
                    <div>
                        <img className="user-img" src={person2} alt="user pic"></img>
                        <h4>Mary</h4>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>

                        <p>I've had some great Mediterranean food before, but none of them beats
                            Little Lemon in flavor and texture.</p>
                    </div>
                </section>
                <section className='testimonials-card'>
                    <div>
                        <img className="user-img" src={person3} alt="user pic"></img>
                        <h4>Alice</h4>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>

                        <p>I came to Little Lemon after a 5 hour flight from the East Coast.
                            The food here tasted so delicious after the trip here.</p>
                    </div>
                </section>
                <section className='testimonials-card'>
                    <div>
                        <img className="user-img" src={person4} alt="user pic"></img>
                        <h4>Williams</h4>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>
                        <img className="star-img" src={star} alt="star"></img>

                        <p>The food here was fire!! Everyone should try this place
                            out at least once if they live in Chicago.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}

export default Testimonials;