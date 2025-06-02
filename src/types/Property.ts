export type PropertyType = "apartment" | "house" | "studio" | "villa" | "";
export type TransactionType = "rent" | "sale" | "";
export type SortOption = "newest" | "price-asc" | "price-desc" | "popular";
export type Amenity = "balcony" | "garden" | "garage" | "pool" | "elevator";

export interface FilterState {
  searchTerm: string;
  propertyType: PropertyType;
  transactionType: TransactionType;
  minPrice: number;
  maxPrice: number;
  minSize: number;
  maxSize: number;
  selectedAmenities: Amenity[];
  sortValue: SortOption;
}

export interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
}
export interface Property {
  id: number; // Змінив string на number
  title: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  price: number;
  transaction: "rent" | "sale";
  type: "apartment" | "house" | "studio" | "villa";
  amenities: string[];
  dateAdded: string;
  description: string; // Додав, оскільки це поле є в JSON
}
