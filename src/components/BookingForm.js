import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import "./styles/BookingFormStyles.css";
import {useState} from 'react';
import booking_table from "../assets/images/Book_table_picture.jpg";
import useSubmit from "../components/hooks/useSubmit";
import {useAlertContext} from "../components/context/alertContext";

const BookingForm = (props) => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();


    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [contact,setContact] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        submit("/",fname);
    }

    useEffect(()=> {
        console.log("testing");
        if(date != "" && time != "" && guests != 0 && occasion != "", fname != "" && lname != "" && contact != "") {
            setSuccess(!success);
        }
    }, [date, time, guests, occasion, fname, lname, contact])
    useEffect(() => {
        if (response) {
          onOpen(response.type, response.message);
        }
      }, [response])
    return (
        <article className="booking-container">
            <img src={booking_table} alt="Restaurant image"></img>
            <h1 className="booking-heading">BOOKING TABLE</h1>
        <section className="booking-section">
            <form onSubmit={handleSubmit}>
                <div className="flex-container">
                    <label className="left" htmlFor="fname">First Name:</label>
                    <input className="right" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} type="text" required/>
                </div>

                <div className="flex-container">
                    <label className="left" htmlFor="lname">Last Name:</label>
                    <input className="right" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} type="text" required/>
                </div>

                <div className="flex-container">
                    <label className="left" htmlFor="contact">Contact Number:</label>
                    <input className="right" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} type="tel" required/>
                </div>

                <div className="flex-container">
                    <label className="left" htmlFor="book-date">Choose Date:</label>
                    <input className="right" id="book-date"  value={date} onChange={(e) => {setDate(e.target.value)}} type="date" required></input>
                </div>

                <div className="flex-container">
                    <label className="left" htmlFor="book-time">Choose Time:</label>
                    <select className="right" id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                        <option value="">Select a Time</option>
                        {props.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                    </select>
                </div>

                <div className="flex-container">
                    <label className="left" htmlFor="book-guests">Number of Guests:</label>
                    <input className="right" id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                </div>

                <div className="flex-container">
                    <label className="left" htmlFor="book-occasion">Occasion:</label>
                    <select className="right" id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option value="">Select an Option</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Office Party</option>
                    </select>
                </div>

                <div className="btnReceive">
                    <Link to='/bookingconfirmation'><input aria-label="On Click" type={"submit"} value={"RESERVE TABLE"} disabled={!success}></input></Link>
                </div>
            </form>
        </section>
        </article>
    );
};

export default BookingForm;