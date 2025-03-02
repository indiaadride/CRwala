import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://cr-wala.onrender.com/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="container">
      <img className="logo1" src="../img/logo.png" alt="Logo" />
      <div className="login-section">
        <div className="header1">Log in To Your Account</div>
        <div className="content">Enter your account credentials</div>

        <form onSubmit={handleLogin} className="form-container">
          <input
            type="email"
            placeholder="Enter email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>
      </div>

      <div className="signup-section">
        <div className="illustration">
          <img className="img" src="/img/log.png" alt="Sign up illustration" />
        </div>
        <div className="header2">New Here?</div>
        <div className="content">Sign up & register for great new opportunities</div>
        <button className="signup-btn" onClick={() => navigate("/register")}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
