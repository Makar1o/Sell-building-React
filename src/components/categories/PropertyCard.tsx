import React from "react";
import { Property } from "../../types/Property";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card">
      <img
        src={property.image}
        alt={property.title}
        className="property-image"
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src = "../images/placeholder.jpg";
        }}
      />
      <div className="property-details">
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          <i className="fas fa-map-marker-alt"></i>
          {property.location}
        </div>
        <div className="property-features">
          <div className="feature">
            <i className="fas fa-bed"></i>
            {property.bedrooms} room.
          </div>
          <div className="feature">
            <i className="fas fa-bath"></i>
            {property.bathrooms} bash.
          </div>
          <div className="feature">
            <i className="fas fa-ruler-combined"></i>
            {property.size} m²
          </div>
        </div>
        <div className="property-price">
          {property.transaction === "rent"
            ? `₴${property.price.toLocaleString("uk-UA")}/month`
            : `₴${property.price.toLocaleString("uk-UA")}`}
        </div>
        <div className="property-actions">
          <button className="btn-details">More Info</button>
          <button className="btn-favorite">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
