import React from "react";
import { Box } from "@mui/material";
import ProductFiltersPage from "@/app/(store)/products/[...slug]";
export default function ProductsSite() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <ProductFiltersPage />
    </Box>
  );
}
