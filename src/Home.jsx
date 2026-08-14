import React, { useEffect, useState } from "react";
import "./App.css";
import salonImage from "./assets/new2salon.jpg";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log("API Response:", data);
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  }, []);

  return (
    <>
      <div className="hero">
        <img
          src={salonImage}
          alt="RAJFADED Hair Salon"
        />
      </div>

      {/* API Test */}
      <div>
        <h2>API Calling Test</h2>

        {users.map((user) => (
          <p key={user.id}>
            {user.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default Home;