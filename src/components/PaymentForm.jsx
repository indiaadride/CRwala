import '../styles/PaymentForm.css';
import { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: 'Credit Card',
        totalPrice: 200,
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post('https://cr-wala.onrender.com/api/orders', {
            orderItems: [
              {
                name: 'Product 1',
                qty: 1,
                price: formData.totalPrice,
              }
            ],
            shippingAddress: {
              address: formData.address,
              city: 'Your City',
              postalCode: '12345',
              country: 'India',
            },
            paymentMethod: formData.paymentMethod,
            totalPrice: formData.totalPrice,
          });
          alert('Payment Successful!');
        } catch (error) {
          console.error('Payment failed:', error);
          alert('Payment Failed!');
        }
      };


  return (
    <div className="payment-container">
      <header className="payment-header">
        <button className="back-button">←</button>
        <h1>Payment</h1>
      </header>
      <section className="payment-method">
        <h2>Payment Method</h2>
        <div className="payment-icons">
          <img src="/img/ms.png" alt="Mastercard" />
          <img src="/img/visa.png" alt="Visa" />
          <img src="/img/americanexpress.png" alt="American Express" />
          <img src="img/discover.png" alt="Discover" />
        </div>
      </section>
      <form className="payment-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Credit Card Details</legend>
          <label>Name on Card</label>
          <input type="text" placeholder="Name on Card" onChange={handleChange} />
          <label>Card number</label>
          <input type="text" placeholder="000000000000" onChange={handleChange} />
          <div className="card-expiration">
            <select>
              <option>Month</option>
            </select>
            <select>
              <option>Year</option>
            </select>
          </div>
          <label>Card Security Pin</label>
          <input type="password" placeholder="Code" onChange={handleChange}  />
        </fieldset>
        <fieldset>
          <legend>Billing Address</legend>
          <label>Country</label>
          <input type="text" placeholder="Country" onChange={handleChange} />
          <label>Address</label>
          <input type="text" placeholder="Address" onChange={handleChange}  />
          <label>City</label>
          <input type="text" placeholder="City" onChange={handleChange} />
          <label>State</label>
          <input type="text" placeholder="State" onChange={handleChange}  />
        </fieldset>
        <fieldset>
          <legend>Contact Information</legend>
          <label>Email</label>
          <input type="email" placeholder="Email"onChange={handleChange}  />
          <label>Phone</label>
          <input type="tel" placeholder="Phone" onChange={handleChange} />
        </fieldset>
        <button type="submit" className="pay-button">Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;



