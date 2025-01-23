import React from "react";
import { Box } from "@mui/material";
import ProductFiltersPage from "@/app/(store)/products/[...slug]";
import FilterTopbar from "./_components/FilterTopbar";
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
      <FilterTopbar />
      <ProductFiltersPage />
    </Box>
  );
}
