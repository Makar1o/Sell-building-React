import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

export const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccessMessage("Check your email inbox to confirm your account.");
    }
  };

  const handleAlreadyRegister = () => {
    navigate("/login");
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-content">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              className="custom-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="custom-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <div className="form-buttons">
            <button type="submit" className="primary-btn">
              Register
            </button>
            <button
              onClick={handleAlreadyRegister}
              type="button"
              className="secondary-btn"
            >
              Already have an account? Log In
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
