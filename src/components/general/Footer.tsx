import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-logo">
          {/* Навігація без href, а через to */}
          <Link to="/home">
            <img
              src="/images/logo-white.png"
              alt="Logo"
              className="footer-logo-img"
            />
          </Link>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Explore</h4>
            <div className="footer-links">
              <Link to="/categories">Buy a Property</Link>
              <Link to="/categories">Rent a Property</Link>
              <Link to="/categories">Property Categories</Link>
              {/* Якщо немає маршруту - краще зробити <a> з href, але це не внутрішня навігація */}
              <a href="#">Neighborhood Guide</a>
              <Link to="/categories">Gallery</Link>
            </div>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <div className="footer-links">
              <a href="#">Real Estate Consulting</a>
              <a href="#">Property Management</a>
              <a href="#">Sell Your Home</a>
              <a href="#">Investment Opportunities</a>
              <a href="#">Mobile App</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Blog</h4>
            <h4>Resources</h4>
            <div className="footer-links">
              <a href="#">Market Insights</a>
              <a href="#">FAQs</a>
            </div>
            <h4>Insights & News</h4>
            <div className="footer-links">
              <a href="#">Expert Insights</a>
              <a href="#">Latest Updates</a>
              <Link to="/contact">Stay Informed</Link>
            </div>
          </div>
          <div className="footer-column">
            <h4>About Ares</h4>
            <div className="footer-links">
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
              <Link to="/contact">Get in Touch</Link>
            </div>
            <div className="footer-links">
              <a href="#">Investor Login</a>
              <a href="#">Investor Relations</a>
            </div>
            <div className="footer-icons">
              <span className="icon-x">X</span>
              <span className="icon-in">in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p className="copy-right">
            © 2025 Ares Management. All Rights Reserved.
          </p>
        </div>
        <div className="footer-links footer-policy">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy & Security</a>
          <a href="#">CCPA Compliance</a>
          <a href="#">Online Security</a>
          <a href="#">Coverage Transparency</a>
        </div>
      </div>
    </footer>
  );
}
