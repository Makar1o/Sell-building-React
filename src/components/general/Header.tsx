import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../authorization/UserContext";
import { supabase } from "../../utils/supabaseClient";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    closeMenu();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-container">
            <Link to="/">
              <img className="rectangle-1" src="./images/logo.png" alt="Logo" />
            </Link>
          </div>

          <nav className="desktop-nav">
            <ul className="nav-list">
              <li>
                <a href="#about-us" className="nav-item">
                  About Us
                </a>
              </li>
              <li>
                <a href="#properties" className="nav-item">
                  Properties
                </a>
              </li>
              <li>
                <Link to="/categories" className="nav-item">
                  Categories
                </Link>
              </li>
              <li>
                <a href="#services" className="nav-item">
                  Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="nav-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="desktop-cta cta-buttons">
            {!loading && user ? (
              <>
                <div className="user-avatar">
                  <img src="/images/profile-icon.svg" alt="Profile" />
                </div>

                <button className="secondary-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="secondary-btn">Log In</button>
                </Link>
                <Link to="/categories">
                  <button className="primary-btn">Get Started</button>
                </Link>
              </>
            )}
          </div>

          {/* Burger btn */}
          <button
            className={`burger-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          ×
        </button>
        <ul className="nav-list">
          <li>
            <a href="#about-us" className="nav-item" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#properties" className="nav-item" onClick={closeMenu}>
              Properties
            </a>
          </li>
          <li>
            <Link to="/categories" className="nav-item" onClick={closeMenu}>
              Categories
            </Link>
          </li>
          <li>
            <a href="#services" className="nav-item" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <Link to="/contact" className="nav-item" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="cta-buttons">
          {!loading && user ? (
            <>
              <span className="user-email">{user.email}</span>
              <button className="secondary-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeMenu}>
                <button className="secondary-btn">Log In</button>
              </Link>
              <Link to="/categories" onClick={closeMenu}>
                <button className="primary-btn">Get Started</button>
              </Link>
            </>
          )}
        </div>
      </div>

      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}
