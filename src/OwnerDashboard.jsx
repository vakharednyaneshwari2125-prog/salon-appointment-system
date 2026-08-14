import { useState } from "react";
import "./OwnerDashboard.css";

function OwnerDashboard() {
  const [selectedDate, setSelectedDate] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const result = savedAppointments.filter(
      (appointment) => appointment.date === selectedDate
    );

    setAppointments(result);
    setSearched(true);
  };

  return (
    <div className="owner-dashboard">

      <div className="owner-container">

        <h1>Owner Dashboard</h1>

        <p className="owner-subtitle">
          View all appointments for a selected date
        </p>

        {/* Date Search */}

        <div className="owner-search">

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSearched(false);
            }}
          />

          <button onClick={handleSearch}>
            View Appointments
          </button>

        </div>

        {/* Appointment Count */}

        {searched && (
          <div className="appointment-count">

            <h2>
              {appointments.length} / 12
            </h2>

            <p>
              Appointments Booked
            </p>

          </div>
        )}

        {/* Appointments */}

        {searched && appointments.length > 0 && (

          <div className="owner-table">

            <div className="owner-table-header">

              <div>Name</div>
              <div>Mobile</div>
              <div>Service</div>
              <div>Time</div>
              <div>Price</div>
              <div>Status</div>

            </div>

            {appointments.map((appointment) => (

              <div
                className="owner-table-row"
                key={appointment.id}
              >

                <div>
                  {appointment.name}
                </div>

                <div>
                  {appointment.mobile}
                </div>

                <div>
                  {appointment.service}
                </div>

                <div>
                  {appointment.time}
                </div>

                <div>
                  {appointment.price}
                </div>

                <div className="booked-status">
                  Booked
                </div>

              </div>

            ))}

          </div>

        )}

        {/* No Appointments */}

        {searched && appointments.length === 0 && (

          <div className="no-owner-appointment">
            No appointments found for this date.
          </div>

        )}

      </div>

    </div>
  );
}

export default OwnerDashboard;