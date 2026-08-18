import { useState } from "react";
import "./AppointmentDetails.css";

function AppointmentDetails() {
  const [mobile, setMobile] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const enteredMobile = mobile.trim();

    if (!enteredMobile) {
      alert("Please enter your mobile number");
      return;
    }

    setLoading(true);
    setSearched(false);
    setAppointments([]);

    try {
      // Spring Boot API call
      const response = await fetch(
        `https://salon-appointment-system-3-kg3i.onrender.com/api/appointments/mobile/${enteredMobile}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }

      const result = await response.json();

      console.log("Appointments from API:", result);

      setAppointments(result);
      setSearched(true);

    } catch (error) {
      console.error("API Error:", error);

      alert(
        "Unable to connect to server. Please make sure Spring Boot is running."
      );

      setSearched(true);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-details-page">

      <div className="details-container">

        {/* Heading */}
        <h1>Check Your Appointment</h1>

        {/* Search Box */}
        <div className="search-box">

          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
              setSearched(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

        {/* Appointment Table */}
        <div className="appointment-table">

          {/* Header */}
          <div className="table-header">

            <div>Name</div>
            <div>Service</div>
            <div>Date</div>
            <div>Time</div>
            <div>Status</div>

          </div>

          {/* Loading */}
          {loading && (
            <div className="no-appointment">
              Searching appointment...
            </div>
          )}

          {/* Before Search */}
          {!searched && !loading && (
            <div className="no-appointment">
              Enter your mobile number and click Search
            </div>
          )}

          {/* No Appointment */}
          {searched && appointments.length === 0 && !loading && (
            <div className="no-appointment">
              No appointment found
            </div>
          )}

          {/* Appointments */}
          {searched &&
            appointments.length > 0 &&
            appointments.map((appointment) => (

              <div
                className="table-row"
                key={appointment.id}
              >

                <div>
                  {appointment.name}
                </div>

                <div>
                  {appointment.service}
                </div>

                <div>
                  {appointment.date}
                </div>

                <div>
                  {appointment.time}
                </div>

                <div className="status">
                  Booked
                </div>

              </div>

            ))}

        </div>

      </div>

    </div>
  );
}

export default AppointmentDetails;