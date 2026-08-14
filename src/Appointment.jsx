import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Appointment.css";

function Appointment() {
  const location = useLocation();

  const selectedService = location.state?.service || "";
  const selectedPrice = location.state?.price || "";

  const priceNumber = Number(
    selectedPrice.replace("₹", "")
  );

  const advanceAmount = priceNumber
    ? priceNumber * 0.20
    : 0;

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: selectedService,
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all details");
      return;
    }

    // Appointment data
    const appointmentData = {
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      service: formData.service,
      date: formData.date,
      time: formData.time,
      price: selectedPrice,
      advance: `₹${advanceAmount}`,
      paymentStatus: "Pending",
    };

    try {
      // Send appointment to Spring Boot
      const response = await fetch(
        "http://localhost:8080/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );

      // Backend error
      if (!response.ok) {
        const errorMessage = await response.text();
        alert(errorMessage || "Appointment booking failed");
        return;
      }

      // Successful booking
      const savedAppointment = await response.json();

      console.log("Saved Appointment:", savedAppointment);

      alert("Appointment booked successfully!");

      // Reset form
      setFormData({
        name: "",
        mobile: "",
        service: selectedService,
        date: "",
        time: "",
      });

    } catch (error) {
      console.error("API Error:", error);

      alert(
        "Unable to connect to server. Please make sure Spring Boot is running."
      );
    }
  };

  return (
    <div className="appointment-page">

      <div className="appointment-box">

        <div className="appointment-heading">

          <h1>Book Your Appointment</h1>

          <p>
            Enter your details and choose your preferred date and time
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          {/* Mobile Number */}
          <div className="input-group">

            <label>Mobile Number</label>

            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />

          </div>

          {/* Selected Service */}
          <div className="selected-service">

            <div>

              <span>Selected Service</span>

              <strong>
                {selectedService}
              </strong>

            </div>

            <div>

              <span>Service Price</span>

              <strong>
                {selectedPrice}
              </strong>

            </div>

          </div>

          {/* Date */}
          <div className="input-group">

            <label>Appointment Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

          </div>

          {/* Time */}
          <div className="input-group">

            <label>Appointment Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />

          </div>

          {/* Payment */}
          <div className="payment-info">

            <h3>Advance Payment</h3>

            <p>
              To confirm your appointment, 20% advance
              payment is required.
            </p>

            <strong>
              20% Advance: ₹{advanceAmount}
            </strong>

          </div>

          <button
            type="submit"
            className="book-btn"
          >
            Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}

export default Appointment;