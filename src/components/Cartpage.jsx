import '../styles/CartPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartTotal] = useState(2000);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartTotal } });
  };

  return (
    <div className="cart-container">
      <div className="cart-banner">
        <h2>Your Cart</h2>
        <p>Review your selection and proceed to checkout</p>
      </div>

      <div className="cart-item">
        <img src="/img/cart2.png" alt="Personal Branding Package" />
        <div className="cart-item-details">
          <h3>Personal Branding Package</h3>
          <p className="description">8 Hours Access • All Rooms Available</p>
          <p className="price">Rs. {cartTotal}/session</p>
          <div className="cart-actions">
            <button className="edit-btn">✏️ EDIT</button>
            <button className="remove-btn">🛒 REMOVE</button>
          </div>
        </div>
      </div>

      <div className="cart-totals">
        <h2>Cart Total</h2>
        <div className="subtotal">
          <span>Subtotal</span>
          <span>Rs. {cartTotal}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>Rs. {cartTotal}</span>
        </div>
      </div>

      <button className="checkout-btn" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartPage;
