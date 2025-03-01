
import "../styles/services.css";
// import { useState, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ServicesPage = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [showForm, setShowForm] = useState(false);

  const services = [
    {
      title: 'Media Relations',
      description: 'We provide you with the better solutions how to create compelling contents, Develop relationship with media Contracts',
    },
    {
      title: 'Personal Branding',
      description: 'We provide you with how you can stand out in a marketing crowd, Build trust, Foster relationship with clients.',
    },
    {
      title: 'Crisis Management',
      description: 'We provide you with Proactive strategies to navigate crisis with trust, Confidence & maintaining trust with clients',
    },
    {
      title: 'Reputation Management',
      description: 'We help you with monitoring, addressing feed back, managing online reviews, enhancing credibility',
    },
    {
      title: 'Influence Building',
      description: 'We will help you with consistency sharing valuable contents, engaging with audience, building trustworthy connections',
    },
    {
      title: 'Publishing',
      description: 'We will help you in the process of producing & distributing content for public consumption',
    },
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
          <img src="/img/ServicesImg.png" alt="Landing Page" className="landimg" />
          <div className="hero-content">
            <h1>Unleash Your Brands Potential With Cutting-Edge Solutions</h1>
            <p>At Our CR Wala , We Offer Dynamic Suite Of Services Tailored To Propel Your Brand To New Heights, Our Expertise Span Across Wide Array of Strategies, Ensuring To have More Effective Solutions </p>
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

<div className="services-container">
      <h2>What Services Are We Offering</h2>
      <p className="subheading">Tailored PR Services That Delivers Effective Results</p>
      {services.map((service, index) => (
          <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button className="know-more">Know More</button>
        </div>
      ))}
    </div>

    </div>
  );
};

export default ServicesPage;
