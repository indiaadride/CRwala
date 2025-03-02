import React from 'react';

const PaymentFailed = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headerStyle = {
    backgroundColor: '#a33d1f',
    color: '#ffffff',
    padding: '15px',
    width: '90%',
    textAlign: 'center',
    fontSize: '24px',
  };

  const backButtonStyle = {
    position: 'absolute',
    left: '10px',
    top: '15px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  const iconStyle = {
    width: '100px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={backButtonStyle}>&larr;</span>
        Failed
      </div>
      <img
        src="/img/se.png"
        alt="Failed Icon"
        style={iconStyle}
      />
      <h2 style={{ color: 'black' }}>Payment Failed</h2>
      <p style={{ color: 'black' }}>Unable to Proceed Further</p>
      <button style={buttonStyle} onClick={() => window.location.href = '/retry'}>
        Pay with another card
      </button>
    </div>
  );
};

export default PaymentFailed;
