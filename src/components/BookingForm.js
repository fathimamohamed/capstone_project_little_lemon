import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import "./styles/BookingFormStyles.css";
import {useState} from 'react';
import booking_table from "../assets/images/Book_table_picture.jpg";


const BookingForm = ({
    availableTimes,
    dispatchOnDateChange,
    submitData
  }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [contact,setContact] = useState("");

    const [success, setSuccess] = useState(false);

    const [fnameerrormessage, setFnameErrormessage] = useState("");
    const [lnameerrormessage, setLnameErrormessage] = useState("");
    const [contacterrormessage, setContactErrormessage] = useState("");
    const [dateerrormessage, setDateErrormessage] = useState("");
    const [timeerrormessage, setTimeErrormessage] = useState("");
    const [guestserrormessage, setGuestsErrormessage] = useState("");
    const [occasionerrormessage, setOccasionErrormessage] = useState("");

    useEffect(()=> {
        if(date !== "" && time !== "" && guests !== 0 && occasion !== "" && fname !== "" && lname !== "" && contact !== "" && contact.length == 10) {
            setSuccess(!success);
        }
    }, [date, time, guests, occasion, fname, lname, contact])

      const handleFnameChange = e => {
        setFname(e.target.value);
        if(e.target.value === "") {
            setFnameErrormessage("First Name is required");
        } else {
            setFnameErrormessage("");
        }
      };

      const handleLnameChange = e => {
        setLname(e.target.value);
        if(e.target.value === "") {
            setLnameErrormessage("Last Name is required");
        } else {
            setLnameErrormessage("");
        }
      };

      const handleContactChange = e => {
        setContact(e.target.value);
        if(e.target.value==="" || e.target.value.length !== 10) {
            setContactErrormessage("Please enter a 10 digit mobile number");
        } else {
            setContactErrormessage("");
        }
      };

      const handleOccasionChange = e => {
        setOccasion(e.target.value);
        if(e.target.value === ""){
            setOccasionErrormessage("Please fill the occasion type");
        } else {
            setOccasionErrormessage("");
        }
      };

      const handleGuestsChange = e => {
        setGuests(e.target.value);
        if(e.target.value === "" ) {
            setGuestsErrormessage("Please enter number of guest");
        } else if(e.target.value >10) {
            setGuestsErrormessage("Please enter number of guest less than or equal to 10");
        }
        else {
            setGuestsErrormessage("");
        }
      }

      const handleDateChange = e => {
        setDate(e.target.value);
        if(e.target.value === "") {
            setDateErrormessage("Please enter a date");
        } else {
            setDateErrormessage("");
        }
        dispatchOnDateChange(e.target.value);
      };

      const handleTimeChange = e => {
        setTime(e.target.value);
        if(e.target.value === "") {
            setTimeErrormessage("Please enter the time of visit");
        } else {
            setTimeErrormessage("");
        }
      }

      const handleSubmit = e => {
        e.preventDefault();
        submitData({ date, time, guests, occasion, });
      };

    return (
        <article className="booking-container">
            <img src={booking_table} alt="Restaurant image"></img>
            <h1 className="booking-heading">BOOKING TABLE</h1>
        <section className="booking-section">
            <form onSubmit={handleSubmit}>
                <div className="flex-container">
                    <label className="left" htmlFor="fname">First Name:</label>
                    <input className="right" id="fname" value={fname} onChange={handleFnameChange} type="text" required/>
                </div>
                {fnameerrormessage && (<p className="error"> {fnameerrormessage} </p>)}

                <div className="flex-container">
                    <label className="left" htmlFor="lname">Last Name:</label>
                    <input className="right" id="lname" value={lname} onChange={handleLnameChange} type="text" required/>
                </div>
                {lnameerrormessage && (<p className="error"> {lnameerrormessage} </p>)}

                <div className="flex-container">
                    <label className="left" htmlFor="contact">Contact Number:</label>
                    <input className="right" id="contact" value={contact} onChange={handleContactChange} type="tel" pattern="[1-9]{1}[0-9]{9}" minLength={10} maxLength={10} required/>
                </div>
                {contacterrormessage && (<p className="error"> {contacterrormessage} </p>)}

                <div className="flex-container">
                    <label className="left" htmlFor="book-date">Choose Date:</label>
                    <input className="right" id="book-date"  value={date}  onChange={handleDateChange} type="date" required></input>
                </div>
                {dateerrormessage && (<p className="error"> {dateerrormessage} </p>)}

                <div className="flex-container">
                    <label className="left" htmlFor="book-time">Choose Time:</label>
                    <select className="right" id="book-time" value={time} onChange={handleTimeChange} required>
                        <option value="">Select a Time</option>
                        {availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                    </select>
                </div>
                {timeerrormessage && (<p className="error"> {timeerrormessage} </p>)}

                <div className="flex-container">
                    <label className="left" htmlFor="book-guests">Number of Guests:</label>
                    <input className="right" id="book-guests" min="1" value={guests} onChange={handleGuestsChange} type="number" placeholder={0} max={10} required></input>
                </div>
                {guestserrormessage && (<p className="error"> {guestserrormessage} </p>)}

                <div className="flex-container">
                    <label className="left" htmlFor="book-occasion">Occasion:</label>
                    <select className="right" id="book-occasion" key={occasion} value={occasion} onChange={handleOccasionChange} required>
                        <option value="">Select an Option</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Office Party</option>
                    </select>
                </div>
                {occasionerrormessage && (<p className="error"> {occasionerrormessage} </p>)}

                <div className="btnReceive">
                    <Link to='/bookingconfirmation'><input aria-label="On Click" type={"submit"} value={"RESERVE TABLE"} disabled={!success}></input></Link>
                </div>
            </form>
        </section>
        </article>
    );
};

export default BookingForm;