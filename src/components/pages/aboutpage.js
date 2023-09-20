import '../styles/AboutStyles.css';
import About1 from '../../assets/images/About-front.jpg';
import restaurant from '../../assets/images/about.jfif';

function aboutpage () {
    return (
        <article id="about_section" className='about-grid-container'>
            <section className='about-grid-item'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>
            <section className='about-grid-item img-overlap'>
                <img className="img1" src={restaurant} alt="About image"></img>
                <img className="img2" src={About1} alt="About image"></img>
            </section>
        </article>

);
}

export default aboutpage;