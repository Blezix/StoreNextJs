"use client";
import { useRouter } from "next/navigation";
import {Select, MenuItem, FormControl} from "@mui/material";
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

      <FormControl fullWidth>
      <Select value={currentSort} onChange={handleSortChange}>
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="price-asc">Price: Low to High</MenuItem>
        <MenuItem value="price-desc">Price: High to Low</MenuItem>
        <MenuItem value="name-asc">Name: A to Z</MenuItem>
        <MenuItem value="name-desc">Name: Z to A</MenuItem>
      </Select>
      </FormControl>

  );
};

export default SortOptions;
