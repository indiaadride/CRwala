import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://cr-wala.onrender.com/api/auth/register", {
        email,
        password,
      });

      alert("Registration successful! Please log in.");
      navigate("/login"); 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
      console.log(err);
    }
  };

  return (
    <div className="container">
       <img className="logo1" src="../img/logo.png" alt="Logo" />
      <div className="login-section">
        <div className="header1">Create Account</div>
        <div className="content">Enter your Details</div>
        
        <form onSubmit={handleRegister} className="form-container">
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

          <button type="submit" className="sign-in-btn">Sign up</button>
        </form>
      </div>
      
      <div className="signup-section">
        <div className="illustration">
          <img className="img" src="../img/log.png" alt="Sign up illustration" />
        </div>
        <div className="header2">New Here</div>
        <div className="content">Sign up & register to great new opportunities</div>
        <button className="signup-btn" onClick={() => navigate("login")}>Login</button>
      </div>
    </div>
  );
};

export default Register;
