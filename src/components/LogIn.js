import React, { useState } from "react";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error Logging In");
      console.error("Error:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful");
      }
    } catch (error) {
      setMessage("Error Logging In");
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMessage("Logged out successfully");
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const isLoggedIn = localStorage.getItem("token");

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome" : "Login"}</h1>
      {!isLoggedIn && (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => handleInputChange(e, setUsername)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handleInputChange(e, setPassword)}
          />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      <p>{message}</p>
    </div>
  );
}
