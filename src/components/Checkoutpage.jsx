import '../styles/CheckoutPage.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import upiIcon from "/img/upi.png";
import visaIcon from "/img/visa.png";
import mastercardIcon from "/img/ms.png";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartTotal } = location.state || { cartTotal: 0 };

  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    state: '',
    phone: '',
    address: '',
    email: '',
    city: '',
    zip: '',
    country: ''
  });

  const paymentOptions = [
    { name: "Upi Payment", icon: upiIcon },
    { name: "Visa Card", icon: visaIcon, details: "****4586" },
    { name: "Master Card", icon: mastercardIcon, details: "****7582" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const order = {
      orderItems: [
        { name: "Product 1", qty: 1, price: cartTotal }
      ],
      shippingAddress: {
        address: formData.address,
        city: formData.city,
        postalCode: formData.zip,
        country: formData.country
      },
      paymentMethod: selectedMethod,
      totalPrice: cartTotal
    };

    try {
      const response = await fetch("https://cr-wala.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      });
      const result = await response.json();
      if (result.orderId) {
        navigate("/paymentform", { state: { orderId: result.orderId } });
      } else {
        alert("Order Placed Successfully");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

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
            <input type="text" placeholder="First Name" name="firstName" onChange={handleInputChange} />
            <input type="text" placeholder="State" name="state" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleInputChange} />
            <input type="text" placeholder="Phone Number" name="phone" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <textarea placeholder="Street Address" name="address" onChange={handleInputChange} />
            <input type="email" placeholder="Email Address" name="email" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Town/City" name="city" onChange={handleInputChange} />
            <input type="text" placeholder="Zip Code" name="zip" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Country/Region" name="country" onChange={handleInputChange} />
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
        <button className='checkout-btn' onClick={handleSubmit}>Book Your Place</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
