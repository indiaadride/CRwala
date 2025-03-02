import "../styles/packagescreen.css";
import img1 from "/img/Office Conversation.png"
import img2 from "/img/pak2.png"

const BrandingPackage = () => {
  return (
    <div className="branding-container">
          <div className="head">
          <img src={img1} alt="Landing Page" className="landimg" />
          <div className="hero-content">
          <h2>Build Your Personal Brand with the Right Environment</h2>
          <p>Leverage our premium coworking space and exclusive access to all rooms to enhance your career journey.</p>
        <button className="cta-button">Get Started</button>
          </div>
          
        </div>

        <div className="package-section">
            <h2 className="bt-heading">Personal Branding Package</h2>
        <div className="package-content">
          <div className="package-text">
            <div className="price-tag">Rs. 2000/session</div>
            <div className="package-includes">
              <ul>
                <li>✅ Press Release Creation & Distribution</li>
                <li>✅ Media Pitching</li>
                <li>✅ Feature Article Placement</li>
                <li>✅ Social Media Profile Optimization</li>
                <li>✅ Reputation Management</li>
                <li>✅ 1-on-1 Consultation with PR Experts</li>
                <li>✅ Access to VIP Networking Events</li>
              </ul>
            </div>
          </div>
          <img src={img2} alt="Coworking Space" className="package-image" />
        </div>
      </div>


      <div className="ideal-for-container">
      <h2>Ideal For</h2>
      <div className="cards-container">
        <div className="card">
          <img src="img/ent.png" alt="Entrepreneurs" />
          <div className="card-text">
            <span className="badge">Entrepreneurs</span>
            <p>Need a <span className="focused">focused</span> workspace</p>
          </div>
        </div>

        <div className="card">
          <img src="/img/inf.png" alt="Influencers" />
          <div className="card-text">
            <span className="badge">Influencers</span>
            <p>Productive environment</p>
          </div>
        </div>

        <div className="card">
          <img src="/img/st.png" alt="Startups" />
          <div className="card-text">
            <span className="badge">Startups</span>
            <p>Meet like-minded professionals</p>
          </div>
        </div>
      </div>

      <button className="book-now">BOOK NOW</button>
      <p className="slots">Limited Slots Available – Reserve Yours Today!</p>
    </div>

    </div>
  );
};

export default BrandingPackage;
