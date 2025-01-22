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
    const priceRange = currentPriceRange || "undefined";
    const slug = [category || "undefined", priceRange];
    router.push(`/products/${slug.join("/")}`);
  };
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const priceRange = e.target.value;
    const category = currentCategory || "undefined";
    const slug = [category, priceRange || "undefined"];
    router.push(`/store/${slug.join("/")}`);
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
