import "../styles/footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import footImg from "/img/footerImg.png"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo */}
        <div className="footer-logo">
          <div className="logo-box">
            <img src={footImg} alt="CR Wala Logo" className="logo-img" />
          </div>
        </div>


        {/* Right Section: Follow Us & Subscribe */}
        <div className="footer-right">
          <div className="social-subscribe">
            <div className="social">
              <h3>Follow us</h3>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-telegram-plane"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="subscribe">
              <h3>Subscribe</h3>
              <p>Subscribe to stay tuned for new web design and latest updates. Let’s do it!</p>
              <div className="subscribe-box">
                <input type="email" placeholder="Enter your email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li><a href="#">Landing Page</a></li>
                <li><a href="#">Popup Builder</a></li>
                <li><a href="#">Web-design</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Use Cases</h3>
              <ul>
                <li><a href="#">Web-designers</a></li>
                <li><a href="#">Marketers</a></li>
                <li><a href="#">Small Business</a></li>
                <li><a href="#">Website Builder</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Academy</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Hosting</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
