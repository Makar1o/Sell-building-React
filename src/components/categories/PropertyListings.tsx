import React, { useState, useEffect } from "react";
import { PropertyCard } from "./PropertyCard";
import { FilterState, Property } from "../../types/Property";

interface PropertyListingsProps {
  properties: Property[];
  filteredProperties: Property[];
  visibleCount: number;
  onLoadMore: () => void;
}

export const PropertyListings: React.FC<PropertyListingsProps> = ({
  properties,
  filteredProperties,
  visibleCount,
  onLoadMore,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (properties.length > 0) {
      setLoading(false);
    }
  }, [properties]);

  if (loading) {
    return <div className="loading-message">Loading properties...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  const visibleProperties = filteredProperties.slice(0, visibleCount);

  return (
    <section className="property-listings">
      <div className="listings-header">
        <h2>Available Properties</h2>
        <div className="results-count">
          Showing{" "}
          <span>{Math.min(visibleCount, filteredProperties.length)}</span> of{" "}
          <span>{filteredProperties.length}</span> properties
        </div>
      </div>

      <div className="properties-grid">
        {visibleProperties.length === 0 ? (
          <div className="no-results">
            <p>Nothing found. Try changing your search parameters.</p>
          </div>
        ) : (
          visibleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}
      </div>

      {visibleCount < filteredProperties.length && (
        <div className="load-more-container">
          <button className="btn-load-more" onClick={onLoadMore}>
            Show More <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      )}
    </section>
  );
};
