import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Typography,
  Box,
  TextField,
} from "@mui/material";
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
  const [priceRange, setPriceRange] =
    useState<[number, number]>(currentPriceRange);
  const [sort, setSort] = useState(currentSort);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    setSort(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(e.target.value);
    if (newMinPrice <= priceRange[1]) {
      setPriceRange([newMinPrice, priceRange[1]]);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Number(e.target.value);
    if (newMaxPrice >= priceRange[0]) {
      setPriceRange([priceRange[0], newMaxPrice]);
    }
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        m: `auto`,
        gap: "10px",
      }}
    >
      <Typography>Price</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={10}
        max={1000}
        disableSwap
        sx={{
          color: "black",
          "& .MuiSlider-thumb": {
            backgroundColor: "black",
          },
          "& .MuiSlider-track": {
            backgroundColor: "black",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "black",
          },
        }}
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          sx={{ flex: "1" }}
          label="Min Price"
          type="number"
          value={priceRange[0]}
          onChange={handleMinPriceChange}
          inputProps={{ min: 10, max: priceRange[1] }}
        />
        <TextField
          sx={{ flex: "1" }}
          label="Max Price"
          type="number"
          value={priceRange[1]}
          onChange={handleMaxPriceChange}
          inputProps={{ min: priceRange[0], max: 1000 }}
        />
      </Box>
      <Typography>Sort</Typography>
      <Select value={sort} onChange={handleSortChange}>
        <MenuItem value="price-asc">Low to High</MenuItem>
        <MenuItem value="price-desc">High to Low</MenuItem>
        <MenuItem value="name-asc">A to Z</MenuItem>
        <MenuItem value="name-desc">Z to A</MenuItem>
      </Select>
      <UniversalButton variant={"black"} onClick={applyFilters}>
        Apply Filters
      </UniversalButton>
    </Box>
  );
};

export default FilterOptions;
