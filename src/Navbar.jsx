import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import "./assets/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img src={logo} alt="Rajfaded Logo" />
        <span>RAJFADED</span>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/appointment-details">
            Appointment Details
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;