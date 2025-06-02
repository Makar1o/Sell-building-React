import React from "react";
import { FilterGroupProps } from "../../types/Property";
export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  children,
}) => {
  return (
    <div className="filter-group">
      <h3 className="filter-title">{title}</h3>
      {children}
    </div>
  );
};
