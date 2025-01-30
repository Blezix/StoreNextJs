import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  currentPriceRange: [number, number];
  currentSort: string;
  setCurrentPriceRange: (range: [number, number]) => void;
  setCurrentSort: (sort: string) => void;
}

const FilterOptions: React.FC<Props> = ({
  currentPriceRange,
  currentSort,
  setCurrentPriceRange,
  setCurrentSort,
}) => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState(currentPriceRange[0]);
  const [maxPrice, setMaxPrice] = useState(currentPriceRange[1]);
  const [sort, setSort] = useState(currentSort);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const applyFilters = () => {
    setCurrentPriceRange([minPrice, maxPrice]);
    setCurrentSort(sort);
    const params = new URLSearchParams(window.location.search);
    params.set("minPrice", minPrice.toString());
    params.set("maxPrice", maxPrice.toString());
    params.set("sort", sort);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div>
      <label>
        Min Price:
        <input
          type="number"
          value={currentPriceRange[0]}
          onChange={handleMinPriceChange}
          min={10}
          max={maxPrice - 1}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={currentPriceRange[1]}
          onChange={handleMaxPriceChange}
          min={minPrice + 1}
        />
      </label>
      <label>
        Sort By:
        <select value={sort} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </label>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;
