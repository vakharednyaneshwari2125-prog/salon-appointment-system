import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OwnerLogin.css";

function OwnerLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo owner credentials
    const ownerUsername = "owner";
    const ownerPassword = "12345";

    if (
      username === ownerUsername &&
      password === ownerPassword
    ) {
      // Owner login successful
      localStorage.setItem("ownerLoggedIn", "true");

      alert("Owner login successful!");

      navigate("/owner-dashboard");
    } else {
      alert("Invalid owner username or password");
    }
  };

  return (
    <div className="owner-login-page">

      <div className="owner-login-box">

        <h1>Owner Login</h1>

        <p>Login to access Owner Dashboard</p>

        <form onSubmit={handleLogin}>

          <div className="owner-input-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter owner username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="owner-input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter owner password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Owner Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default OwnerLogin;