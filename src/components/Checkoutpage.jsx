import '../styles/CheckoutPage.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import upiIcon from "/img/upi.png";
import visaIcon from "/img/visa.png";
import mastercardIcon from "/img/ms.png";

const CheckoutPage = () => {
  const location = useLocation();
  const { cartTotal } = location.state || { cartTotal: 0 }; // Default 0 if no data passed

  const [selectedMethod, setSelectedMethod] = useState('upi');

  const paymentOptions = [
    { name: "Upi Payment", icon: upiIcon },
    { name: "Visa Card", icon: visaIcon, details: "****4586" },
    { name: "Master Card", icon: mastercardIcon, details: "****7582" }
  ];

  return (
    <div className="checkout-container">
      <div className="checkout-banner">
        <h2>Checkout</h2>
        <p>Review your checkout and proceed to place an order</p>
      </div>

      <div className="billing-details">
        <h3>Billing Details</h3>
        <div className="billing-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="State" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <textarea placeholder="Street Address" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Town/City" />
            <input type="text" placeholder="Zip Code" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Country/Region" />
          </div>
        </div>
      </div>

      <div className="cart-totals">
        <h3>Cart Totals</h3>
        <div className="subtotal">
          <span>Subtotal</span>
          <span>Rs. {cartTotal}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>Rs. {cartTotal}</span>
        </div>
      </div>

      <div className="payment-method">
        <h3>Payment Method</h3>
        <div className="payment-options">
          {paymentOptions.map((option) => (
            <label key={option.name} className="payment-option">
              <img src={option.icon} alt={option.name} className="payment-icon" />
              <span>{option.name} {option.details && <span className="card-details">{option.details}</span>}</span>
              <input
                type="radio"
                name="payment"
                value={option.name}
                checked={selectedMethod === option.name}
                onChange={() => setSelectedMethod(option.name)}
              />
              <span className="radio-custom"></span>
            </label>
          ))}
        </div>

        <button className='checkout-btn'>Book Your Place</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
