import React from "react";
import { Link } from "react-router-dom"; // якщо у тебе react-router, інакше можна замінити на <a>

interface Category {
  id: string;
  imgSrc: string;
  imgAlt: string;
  statusText: string;
  statusClass: string; // для "categories-status-right" або "categories-status-left"
}

const categories: Category[] = [
  {
    id: "1",
    imgSrc: "/images/1-rentsell.png",
    imgAlt: "image-for-sale",
    statusText: "Rent",
    statusClass: "categories-status-right",
  },
  {
    id: "2",
    imgSrc: "/images/2-rentsell.png",
    imgAlt: "image-for-sale",
    statusText: "Rent",
    statusClass: "categories-status-left",
  },
  {
    id: "3",
    imgSrc: "/images/3-rentsell.png",
    imgAlt: "image-for-sale",
    statusText: "Rent",
    statusClass: "categories-status-right",
  },
  {
    id: "4",
    imgSrc: "/images/4-rentsell.png",
    imgAlt: "image-for-sale",
    statusText: "Rent",
    statusClass: "categories-status-right",
  },
  {
    id: "5",
    imgSrc: "/images/5-rentsell.png",
    imgAlt: "image-for-sale",
    statusText: "Rent",
    statusClass: "categories-status-left",
  },
  {
    id: "6",
    imgSrc: "/images/6-rentsell.png",
    imgAlt: "image-for-sale",
    statusText: "Rent",
    statusClass: "categories-status-left",
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="categories-container">
      <h2 className="categories-topic">Explore Property Types</h2>
      <div className="categories-grid">
        {categories.map(({ id, imgSrc, imgAlt, statusText, statusClass }) => (
          <Link
            key={id}
            to="/categories"
            className="image-wrapper"
            style={{ textDecoration: "none" }}
          >
            <img className="categories-image" src={imgSrc} alt={imgAlt} />
            <p className={statusClass}>{statusText}</p>
          </Link>
        ))}
      </div>
      <Link to="/categories">
        <button className="bigger-primary-btn primary-btn types-button">
          Browse All Listings
        </button>
      </Link>
    </section>
  );
};

export default CategoriesSection;
