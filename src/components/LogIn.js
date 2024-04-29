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

  return (<div className="container">
  <main className="form-signin w-100 m-auto">
    <form>
      <img
        className="mb-4"
        src="/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt="Bootstrap Logo"
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal"></h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Username</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>

      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" id="remember-me" />
        <label className="form-check-label" for="remember-me">
          Remember me
        </label>
      </div>

      <button className="btn btn-primary w-100 py-2" type="button" onClick={handleLogin}>
        Sign in
      </button>
    </form>
  </main>

  <div>
    <h1>{isLoggedIn ? "Welcome" : "Please log in"}</h1>
    {!isLoggedIn && (
      <div>
        <button className="btn btn-secondary" onClick={handleRegister}>
          Register
        </button>
      </div>
    )}
    {isLoggedIn && (
      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    )}
    <p>{message}</p>
  </div>
</div>
);
}
