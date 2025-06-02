import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { data, error } = await supabase.from("contacts").insert([formData]);

    setLoading(false);

    if (error) {
      setError("Failed to send message. Please try again.");
      console.error(error);
    } else {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  useEffect(() => {
    const map = L.map("map").setView([50.4501, 30.5234], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      detectRetina: true,
    }).addTo(map);

    const epamIcon = L.icon({
      iconUrl: "https://cdn.epam.com/static/images/logo/epam-logo.svg",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    L.marker([50.4501, 30.5234], { icon: epamIcon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: 'Nunito', sans-serif; padding: 1rem;">
          <h3 style="margin: 0 0 0.5rem 0; color: #012a41;">EPAM Kyiv Campus</h3>
          <p style="margin: 0.3rem 0;">123 Innovation Street</p>
          <p style="margin: 0.3rem 0;">Kyiv, Ukraine</p>
          <a href="https://maps.google.com?q=50.4501,30.5234" style="color: #012a41; text-decoration: underline;">
            Get Directions
          </a>
        </div>`
      )
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <Header />

      <main className="contact-container">
        <div className="contact-info">
          <h1 className="section-title">Get in Touch</h1>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Our Office</h3>
                <p>EPAM Campus, 123 Innovation Street, Kyiv, Ukraine</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Call Us</h3>
                <a href="tel:+380123456789">+380 12 345 67 89</a>
                <p>Mon-Fri: 9:00-18:00</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Email Us</h3>
                <a href="mailto:info@epam-capstone.com">
                  info@epam-capstone.com
                </a>
                <p>Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>

          <form id="contactForm" className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>
            )}
            {error && (
              <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
            )}
          </form>
        </div>

        <div className="map-container">
          <h2 className="location-title">Our Location</h2>
          <div
            id="map"
            className="map-wrapper"
            style={{
              height: "500px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          ></div>
        </div>
      </main>

      <Footer />
    </>
  );
}
