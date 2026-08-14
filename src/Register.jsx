import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Appointment from "./Appointment";
import AppointmentDetails from "./AppointmentDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/appointment"
          element={<Appointment />}
        />

        <Route
          path="/appointment-details"
          element={<AppointmentDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;