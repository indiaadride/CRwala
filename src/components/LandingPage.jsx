import "../styles/landing.css";
// import { useState, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [showForm, setShowForm] = useState(false);

  const services = [
    { name: "Crisis Management", description: "We help manage crisis situations effectively." },
    { name: "Influence Building", description: "We build strong networks to enhance your influence." },
    { name: "Personal Branding", description: "We craft your personal brand to stand out." },
    { name: "Publishing", description: "We publish your work to the right audience." },
    { name: "Media Relations", description: "We connect you with key media outlets." },
    { name: "Reputation Management", description: "We maintain and protect your public image." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const handlePay = () => {
    nav("/payment");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/consultations", {
        // const response = await fetch("https://cr-wala.onrender.com/api/auth/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      alert(data.message);
      if (data.success) {
        setShowForm(false);
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error scheduling consultation:", error);
      alert("Failed to schedule consultation.");
    }
  };

  const stats = [
    { value: '47+', label: 'Client article published' },
    { value: '24+', label: 'Start-up Company turned celebrities' },
    { value: '9+', label: 'Award Received' },
    { value: '32+', label: 'Skilled Team members' }
  ];


  return (
    <div className="landing">
      <header className="hero">
        <div className="head">
          <img src="/img/landingpage.png" alt="Landing Page" className="landimg" />
          <div className="hero-content">
            <h1>Boost your Brand Visibility & Reach New Heights With Our Expertise</h1>
            <p>CR Wala is a PR Agency that focuses on bringing YOU & YOUR Story to a bigger
            audience  with a modern approach.</p>
          </div>
        </div>

        <div className="hero-button">
          <button onClick={() => setShowForm(true)}>Schedule a FREE call</button>
        </div>

        <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h3>{stat.value}</h3>
          <h3>{stat.label}</h3>
        </div>
      ))}
    </div>
      </header>

      {showForm && (
        <div className="consultation-form">
          <h2>Schedule a Consultation</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Close</button>
          </form>
        </div>
      )}

<section className="services">
      <h2>What Services Are We Offering</h2>
      <p>Tailored PR Services That Deliver Effective Results</p>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-header" onClick={() => toggleDropdown(index)}>
              <span>{service.name}</span>
              <span className="dropdown">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && <div className="service-description">{service.description}</div>}
          </div>
        ))}
      </div>
    </section>
      

      

      

    </div>
  );
};

export default LandingPage;
