import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../styles/navbar.css";
import { FaBars, FaSearch } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Logo */}
        <img src="/img/logo.png" alt="Logo" className="nav-logo" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaBars className="menu-icon" />
        <input
          type="text"
          placeholder="Hinted search text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      <ul className="nav-links">
        {token ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
