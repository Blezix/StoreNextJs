import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./_components/ProductCard/ProductCard";
export default function NewArrivalsText() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "85%",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  );
}
