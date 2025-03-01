import { useState } from "react";
import "../styles/navbar.css";
import logoImg from "/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="search-box">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <input type="text" placeholder="Hinted search text" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link to="/#">Testimonial</Link>
        </li>{" "}
        {/* For Testimonials, use a hash link or section ID */}
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
        <li>
          <button className="register-btn">Register</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
