import { Drawer, Box, Typography } from "@mui/material";
import React from "react";
import FilterOptions from "./FilterOptions";

interface FilterDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
  currentPriceRange: [number, number];
  setCurrentPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  currentSort: string;
  setCurrentSort: React.Dispatch<React.SetStateAction<string>>;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isDrawerOpen,
  toggleDrawer,
  currentPriceRange,
  setCurrentPriceRange,
  currentSort,
  setCurrentSort,
}) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: 400,
          padding: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">Filters</Typography>
        <FilterOptions
          currentPriceRange={currentPriceRange}
          setCurrentPriceRange={setCurrentPriceRange}
          currentSort={currentSort}
          setCurrentSort={setCurrentSort}
        />
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
