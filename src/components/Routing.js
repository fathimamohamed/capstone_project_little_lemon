import { Routes, Route } from "react-router-dom";
import Booking from "../components/Booking";
import Home from "../components/Home";
import Aboutpage from "../components/pages/aboutpage";
import Menupage from "../components/pages/menupage";
import Orderpage from "../components/pages/orderpage";
import Loginpage from "./pages/loginpage";
import BookingConfirmation from "./BookingConfirmation";


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutpage" element={<Aboutpage />} />
      <Route path="/menupage" element={<Menupage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/orderpage" element={<Orderpage />} />
      <Route path="/loginpage" element={<Loginpage />} />
      <Route path="/bookingconfirmation" element={<BookingConfirmation />} />

    </Routes>
  );
}
