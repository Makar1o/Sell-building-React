import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-container">
      <div className="cta-image">
        <h2 className="cta-topic">Ready to Make Your Move?</h2>
        <p className="cta-text">
          Join thousands of satisfied clients and find your dream property
          today. Whether you're buying or renting, we've got you covered.
        </p>
        <div className="cta-buttons-ct">
          <Link to="/contact">
            <button className="bigger-secondary-btn secondary-btn">
              Contact Us
            </button>
          </Link>
          <Link to="/categories">
            <button className="bigger-primary-btn primary-btn">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
