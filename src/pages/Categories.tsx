import React, { useState, useEffect, ReactNode } from "react";
import { FiltersSidebar } from "../components/categories/FIlterSidebar";
import { PropertyListings } from "../components/categories/PropertyListings";
import { Property, FilterState } from "../types/Property";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Виправлений тип компонента
const Categories: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const response = await fetch("/data/properties.json");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        const propertiesWithAmenities = data.map((p: any) => ({
          ...p,
          amenities: p.amenities || [],
        }));

        setProperties(propertiesWithAmenities);
        setFilteredProperties(propertiesWithAmenities);
        setLoading(false);
      } catch (err) {
        setError("Error loading data. Please try again later.");
        setLoading(false);
        console.error("Error loading properties:", err);
      }
    };

    loadProperties();
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    const filtered = properties.filter((property) => {
      const transactionMatch =
        !filters.transactionType ||
        property.transaction === filters.transactionType;

      const searchTermMatch =
        !filters.searchTerm ||
        property.title
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        property.location
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      const typeMatch =
        !filters.propertyType || property.type === filters.propertyType;
      const priceMatch =
        property.price >= filters.minPrice &&
        property.price <= filters.maxPrice;
      const sizeMatch =
        property.size >= filters.minSize && property.size <= filters.maxSize;

      const amenitiesMatch =
        filters.selectedAmenities.length === 0 ||
        filters.selectedAmenities.every((a) => property.amenities.includes(a));

      return (
        transactionMatch &&
        searchTermMatch &&
        typeMatch &&
        priceMatch &&
        sizeMatch &&
        amenitiesMatch
      );
    });

    let sorted = [...filtered];
    switch (filters.sortValue) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
        break;
      default:
        break;
    }

    setFilteredProperties(sorted);
    setVisibleCount(6);
  };

  const handleResetFilters = () => {
    setFilteredProperties(properties);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div>
      <Header />
      <main className="main-content">
        <FiltersSidebar
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
        />
        <PropertyListings
          properties={properties}
          filteredProperties={filteredProperties}
          visibleCount={visibleCount}
          onLoadMore={handleLoadMore}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
