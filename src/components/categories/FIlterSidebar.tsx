import React, { useState } from "react";
import { FilterGroup } from "./FilterGroup";
import {
  FilterState,
  PropertyType,
  TransactionType,
  SortOption,
  Amenity,
} from "../../types/Property";

interface FiltersSidebarProps {
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
}

const DEFAULTS = {
  minPrice: 0,
  maxPrice: 100000,
  minSize: 0,
  maxSize: 500,
};

const amenityValues: Amenity[] = [
  "balcony",
  "garden",
  "garage",
  "pool",
  "elevator",
];

export const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  onFilterChange,
  onReset,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    propertyType: "",
    transactionType: "rent",
    minPrice: DEFAULTS.minPrice,
    maxPrice: DEFAULTS.maxPrice,
    minSize: DEFAULTS.minSize,
    maxSize: DEFAULTS.maxSize,
    selectedAmenities: [],
    sortValue: "newest",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFilters((prev) => {
      let newFilters = { ...prev };

      if (type === "checkbox") {
        const amenity = name as Amenity;
        newFilters.selectedAmenities = checked
          ? [...prev.selectedAmenities, amenity]
          : prev.selectedAmenities.filter((a) => a !== amenity);
      } else if (type === "radio") {
        newFilters.transactionType = value as TransactionType;
      } else {
        newFilters = { ...prev, [name]: value };
      }

      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value ? parseInt(value) : 0;

    setFilters((prev) => {
      const newFilters = { ...prev, [name]: Math.max(0, numValue) };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleReset = () => {
    setFilters({
      searchTerm: "",
      propertyType: "",
      transactionType: "rent",
      minPrice: DEFAULTS.minPrice,
      maxPrice: DEFAULTS.maxPrice,
      minSize: DEFAULTS.minSize,
      maxSize: DEFAULTS.maxSize,
      selectedAmenities: [],
      sortValue: "newest",
    });
    onReset();
  };

  return (
    <aside className="filters-sidebar">
      <div className="filters-header">
        <h2>Filter Properties</h2>
        <button className="btn-reset" onClick={handleReset}>
          Reset All
        </button>
      </div>

      <FilterGroup title="Rent or Sale">
        <div className="filter-options">
          <label className="radio-option">
            <input
              type="radio"
              name="transaction-type"
              value="rent"
              checked={filters.transactionType === "rent"}
              onChange={handleInputChange}
            />
            <span className="radio-custom"></span>
            Rent
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="transaction-type"
              value="sale"
              checked={filters.transactionType === "sale"}
              onChange={handleInputChange}
            />
            <span className="radio-custom"></span>
            Sale
          </label>
        </div>
      </FilterGroup>

      <FilterGroup title="Property Type">
        <select
          className="filter-select"
          name="propertyType"
          value={filters.propertyType}
          onChange={handleInputChange}
        >
          <option value="">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="studio">Studio</option>
          <option value="villa">Villa</option>
        </select>
      </FilterGroup>

      <FilterGroup title="Location">
        <input
          type="text"
          className="filter-input"
          name="searchTerm"
          placeholder="City or region"
          value={filters.searchTerm}
          onChange={handleInputChange}
        />
      </FilterGroup>

      <FilterGroup title="Price Range">
        <div className="range-inputs">
          <input
            type="number"
            className="range-input"
            name="minPrice"
            placeholder="Min"
            min="0"
            value={filters.minPrice || ""}
            onChange={handleRangeChange}
          />
          <span className="range-separator">-</span>
          <input
            type="number"
            className="range-input"
            name="maxPrice"
            placeholder="Max"
            min="0"
            value={filters.maxPrice || ""}
            onChange={handleRangeChange}
          />
        </div>
      </FilterGroup>

      <FilterGroup title="Size (m²)">
        <div className="range-inputs">
          <input
            type="number"
            className="range-input"
            name="minSize"
            placeholder="Min"
            min="0"
            value={filters.minSize || ""}
            onChange={handleRangeChange}
          />
          <span className="range-separator">-</span>
          <input
            type="number"
            className="range-input"
            name="maxSize"
            placeholder="Max"
            min="0"
            value={filters.maxSize || ""}
            onChange={handleRangeChange}
          />
        </div>
      </FilterGroup>

      <FilterGroup title="Amenities">
        <div className="checkbox-options">
          {amenityValues.map((amenity) => (
            <label key={amenity} className="checkbox-option">
              <input
                type="checkbox"
                name={amenity}
                checked={filters.selectedAmenities.includes(amenity)}
                onChange={handleInputChange}
              />
              <span className="checkbox-custom"></span>
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Sort By">
        <select
          className="filter-select"
          name="sortValue"
          value={filters.sortValue}
          onChange={handleInputChange}
        >
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </FilterGroup>

      <button
        className="btn-apply-filters"
        onClick={() => onFilterChange(filters)}
      >
        Apply Filters
      </button>
    </aside>
  );
};
