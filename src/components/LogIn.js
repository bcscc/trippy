import React, { useState } from "react";
import { useAuth } from "./AuthContext";

export default function LogIn() {
  const { setIsLoggedIn } = useAuth();
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
        setIsLoggedIn(true);
        setMessage("Login successful");
      }
    } catch (error) {
      setMessage("Error Logging In");
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMessage("Logged out successfully");
  };

  const isLoggedIn = localStorage.getItem("token") ? true : false;

  return (
    <main className="container mt-5">
      {!isLoggedIn && (
        <div className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Login</h1>
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
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-me"
              />
              <label className="form-check-label">Remember me</label>
            </div>

            <div style={{ justifyContent: "left" }}>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleLogin}
              >
                Sign in
              </button>

              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <main className="form-signin w-100 m-auto">
            <p>{message}</p>

            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </main>
        </div>
      )}
    </main>
  );
}
