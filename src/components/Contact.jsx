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

import '../styles/contactUs.css';
import { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cr-wala.onrender.com/api/auth/enquiry', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        goals: formData.message
      });

      if (response.status === 200) {
        alert('Message Sent Successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message!');
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Any question or remarks? Just write us a message!</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li>📞 +1012 3456 769</li>
              <li>📧 demo@gmail.com</li>
              <li>📍 132 Dartmouth Street Boston, Massachusetts 02156</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
