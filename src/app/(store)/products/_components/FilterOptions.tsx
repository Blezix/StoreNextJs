import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  currentCategory: string;
  currentPriceRange: string;
}

const FilterOptions: React.FC<Props> = ({
  currentCategory,
  currentPriceRange,
}) => {
  const router = useRouter();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    const params = new URLSearchParams(window.location.search);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/products?${params.toString()}`);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const priceRange = e.target.value;
    const params = new URLSearchParams(window.location.search);
    if (priceRange) {
      params.set("priceRange", priceRange);
    } else {
      params.delete("priceRange");
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div>
      <select value={currentCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>

      <select value={currentPriceRange} onChange={handlePriceRangeChange}>
        <option value="">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
      </select>
    </div>
  );
};

export default FilterOptions;
