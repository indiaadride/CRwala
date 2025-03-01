// import '../styles/contactUs.css';
// import { useState } from 'react';
// import axios from 'axios';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     budget: '',
//     goals: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://cr-wala.onrender.com/api/auth/enquiry', formData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       alert('Enquiry sent successfully!');
//       setFormData({ name: '', email: '', phone: '', budget: '', goals: '' });
//     } catch (error) {
//       alert('Failed to send enquiry');
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       <div className="header">
//         <span className="back-arrow">&#8592;</span>
//         <h1>Contact Us</h1>
//       </div>
//       <h2 className="formtitle">Fuel Your Brand’s Goals with <span className="highlight">Beyond</span></h2>
//       <p className="description">
//         You will get a response within 24 hours. We will explain in detail how we can help you fuel and grow your brand within the stated budget.
//       </p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" className="form-input" value={formData.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email address" className="form-input" value={formData.email} onChange={handleChange} required />
//         <input type="tel" name="phone" placeholder="Phone number" className="form-input" value={formData.phone} onChange={handleChange} required />
//         <input type="text" name="budget" placeholder="Budget" className="form-input" value={formData.budget} onChange={handleChange} required />
//         <textarea name="goals" placeholder="Goals" className="form-input" value={formData.goals} onChange={handleChange} required></textarea>
//         <button type="submit" className="send-enquiry-btn">Send Enquiry <span className="arrow">&#8594;</span></button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;



import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact">

    
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Any question or remarks? Just write us a message!</p>

      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>

          <ul>
            <li>📞 +1012 3456 769</li>
            <li>📧 demo@gmail.com</li>
            <li>📍 132 Dartmouth Street Boston, Massachusetts 02156 United States</li>
          </ul>

         
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
          </div>

          <div className="form-group-diff">
            <label>Select Subject?</label>
            <div>
              <input type="radio" name="subject" checked />
              <span>General Inquiry</span>
            </div>
          </div>

          <div className="form-group">
            <textarea placeholder="Write your message..."></textarea>
          </div>

          <button className="send-btn">Send Message</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
