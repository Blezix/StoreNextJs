"use client";
import { useRouter } from "next/navigation";

interface SortOptionsProps {
  currentSort: string;
}

const SortOptions: React.FC<SortOptionsProps> = ({ currentSort }) => {
  const router = useRouter();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const params = new URLSearchParams(window.location.search);
    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div>
      <select value={currentSort} onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
};

export default SortOptions;
