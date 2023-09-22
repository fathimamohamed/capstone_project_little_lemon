import React, {useState, useEffect } from "react";
import '../styles/BookingFormStyles.css';
import {Link} from 'react-router-dom';

const Loginpage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const [emailerrormessage, setEmailErrorMessage] = useState("");
    const [passworderrormessage, setPasswordErrorMessage] = useState("");

    const handleSubmit = () => {
        console.log("Logged in succesfully");
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if(e.target.value == "") {
            setEmailErrorMessage("Enter a valid email address");
        } else {
            setEmailErrorMessage("");
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(e.target.value == "") {
            setPasswordErrorMessage("Please enter a password");
        } else if(e.target.value < 8) {
            setPasswordErrorMessage("Password length must be atleast 8 characters long");
        } else {
            setPasswordErrorMessage("");
        }
    }

    useEffect(()=> {
        if(email !== "" && password !== "" && password.length >= 8) {
            setLogin(!login);
        }
    }, [email, password])

    return (
        <article className="booking-container">
            <h1 className="booking-heading">LOGIN</h1>
        <section className="booking-section">
            <form onSubmit={handleSubmit}>
                <div className="flex-container">
                    <label className="left" htmlFor="email">Email:</label>
                    <input className="right" id="email" value={email} onChange={handleEmailChange} type="email" required/>
                </div>
                {emailerrormessage && (<p className="error"> {emailerrormessage} </p>)}

                <div className="flex-container">
                    <label className="left" htmlFor="password">Password:</label>
                    <input className="right" id="password" value={password} onChange={handlePasswordChange} type="password" minLength={8} required/>
                </div>
                {passworderrormessage && (<p className="error"> {passworderrormessage} </p>)}

                <div className="btnReceive">
                    <Link to='/'><input aria-label="On Click" type={"submit"} value={"LOGIN"} disabled={!login}></input></Link>
                </div>
            </form>
        </section>
        </article>
    ); 
}

export default Loginpage;