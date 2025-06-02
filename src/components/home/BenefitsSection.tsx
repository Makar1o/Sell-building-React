import React from "react";

interface Benefit {
  id: string;
  number: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: "1",
    number: "01",
    iconSrc: "/images/office-icon.png",
    iconAlt: "office",
    title: "Expert Team",
    description:
      "Our experienced agents provide personalized support to help you make informed property decisions. We design strategies your financial objectives.",
  },
  {
    id: "2",
    number: "02",
    iconSrc: "/images/compass-icon.png",
    iconAlt: "compass-icon",
    title: "Fully Transparent Deals",
    description:
      "No hidden costs, no surprises. We walk you through every step of the process with clear communication and full transparency, so you feel confident and in control.",
  },
  {
    id: "3",
    number: "03",
    iconSrc: "/images/graph-icon.png",
    iconAlt: "graph-icon",
    title: "Truly Client-Focused",
    description:
      "Your needs come first — always. We take time to understand your goals and tailor our support, ensuring your buying or renting experience is smooth, fast, and rewarding.",
  },
  {
    id: "4",
    number: "04",
    iconSrc: "/images/shield-icon.png",
    iconAlt: "shield",
    title: "Experienced & Trusted Agents",
    description:
      "Our team combines years of experience with a modern approach. You get professional advice, negotiation support.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="our-benefits">
      <h3 className="topic-l">Why Choose Our Platform</h3>
      <div className="benefit-cards">
        {benefits.map(
          ({ id, number, iconSrc, iconAlt, title, description }) => (
            <article key={id} className="benefit-card">
              <p className="card-number">{number}</p>
              <img className="card-icon" src={iconSrc} alt={iconAlt} />
              <h4 className="benefit-card-topic">{title}</h4>
              <p className="benefit-card-text">{description}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
