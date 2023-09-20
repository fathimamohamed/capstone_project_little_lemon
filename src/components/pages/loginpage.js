import React, {useState, useEffect } from "react";
import '../styles/BookingFormStyles.css';
import {Link} from 'react-router-dom';

const Loginpage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);


    const handleSubmit = () => {
        console.log("Logged in succesfully");
    }

    useEffect(()=> {
        if(email != "" && password != "") {
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
                    <input className="right" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required/>
                </div>

                <div className="flex-container">
                    <label className="left" htmlFor="password">Password:</label>
                    <input className="right" id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required/>
                </div>

                <div className="btnReceive">
                    <Link to='/'><input aria-label="On Click" type={"submit"} value={"LOGIN"} disabled={!login}></input></Link>
                </div>
            </form>
        </section>
        </article>
    ); 
}

export default Loginpage;