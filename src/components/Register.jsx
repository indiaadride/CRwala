import  { useState } from "react";
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
      navigate("login"); 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="container">
      <div className="login-section">
        <h1>Create Account</h1>
        <p>Enter your Details</p>
        
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
          <img src="/img/signup-illustration.png" alt="Sign up illustration" />
        </div>
        <h2>New Here</h2>
        <p>Sign up & register to great new opportunities</p>
        <button className="signup-btn" onClick={() => navigate("login")}>Login</button>
      </div>
    </div>
  );
};

export default Register;
