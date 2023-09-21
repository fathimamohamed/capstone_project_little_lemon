import React from "react";
import {useState, useEffect} from 'react';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import BookingForm from "./BookingForm";
import pages from '../utils/pages';

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
  };

  const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];

const Booking = () => {
    const [
        availableTimes,
        dispatchOnDateChange
      ] = useReducer(updateTimes, [], initializeTimes);
      const navigate = useNavigate();

      const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate(pages.get('confirmedBooking').path);
      };

    return (

        <BookingForm availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData} />
    )
}

export default Booking;