import React from "react";
import { Box } from "@mui/material";
import ProductFiltersPage from "@/app/(store)/products/[...slug]";
import FilterSidebar from "./_components/FilterSidebar";
export default function ProductsSite() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FilterSidebar />
      <ProductFiltersPage />
    </Box>
  );
}
