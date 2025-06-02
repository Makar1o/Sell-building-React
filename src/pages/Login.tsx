import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <main className="login-page">
        <div className="login-content">
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="custom-input"
              />
            </div>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="custom-input"
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
            <div className="form-buttons">
              <button type="submit" className="primary-btn">
                Log In
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={handleNavigateToRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
