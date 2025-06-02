import React from "react";

export default function StatsSection() {
  return (
    <section className="stats-container">
      <div className="towers-stats-container">
        <div>
          <img
            className="towers-stats"
            src="/images/towers-stats.png"
            alt="towers"
          />
          <h2 className="stats-topic">Your Trusted Investment Partner</h2>
          <div className="stats-content">
            <div>
              <h3 className="topic-l stats-num first-stat">12,000+</h3>
              <p className="stats-text">Properties Listed</p>
            </div>
            <hr />
            <div>
              <h3 className="topic-l stats-num">8,500+</h3>
              <p className="stats-text">Happy Clients</p>
            </div>
            <hr />
            <div>
              <h3 className="topic-l stats-num">250+</h3>
              <p className="stats-text">Verified Agents</p>
            </div>
            <hr />
            <div>
              <h3 className="topic-l stats-num">98%</h3>
              <p className="stats-text">Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
