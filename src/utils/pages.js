const pages = new Map();
pages.set('bookings', { 
  name: 'Reservations', 
  path: '/booking', 
  anchorable: true 
});
pages.set('confirmedBooking', { 
  name: 'Confirmed Booking', 
  path: '/bookingconfirmation', 
  anchorable: false 
});

export default pages;