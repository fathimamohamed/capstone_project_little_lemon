import '../components/styles/BookingConfirmationStyles.css';
import reserved_picture from  '../assets/images/Reserved_picture.webp';

function BookingConfirmation() {
    return (
        <article className="confirmation-container">
            <img src={reserved_picture} alt="Reserved table image"></img>
            <h1 className="confirmation-heading">Thank you!<br></br>Your booking is confirmed</h1>
            <section className="confirmation-section">
                <p>Please feel free to get in touch with us 
                    on +1-234-56789, if you need any other
                    customisations in your booking.</p>
            </section>
        </article>
    );
}

export default BookingConfirmation;