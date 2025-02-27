import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {MenuItem, Select, SelectChangeEvent, Slider, Typography} from "@mui/material";
import UniversalButton from "@/app/_components/UniversalButton";

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
  const [priceRange, setPriceRange] = useState<[number, number]>(currentPriceRange);
  const [sort, setSort] = useState(currentSort);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    setSort(e.target.value);
  };

  const applyFilters = () => {
    setCurrentPriceRange(priceRange);
    setCurrentSort(sort);
    const params = new URLSearchParams(window.location.search);
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());
    params.set("sort", sort);
    router.push(`/products?${params.toString()}`);
  };

  return (
      <div>
        <Typography gutterBottom>Price Range:</Typography>
        <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={10}
            max={1000}
        />
          <Typography gutterBottom>Price Range:</Typography>

          <Select value={sort}  onChange={handleSortChange}>
                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                <MenuItem value="price-desc">Price: High to Low</MenuItem>
                <MenuItem value="name-asc">Name: A to Z</MenuItem>
                <MenuItem value="name-desc">Name: Z to A</MenuItem>
            </Select>
        <UniversalButton variant={"black"} onClick={applyFilters}>Apply Filters</UniversalButton>
      </div>
  );
};

export default FilterOptions