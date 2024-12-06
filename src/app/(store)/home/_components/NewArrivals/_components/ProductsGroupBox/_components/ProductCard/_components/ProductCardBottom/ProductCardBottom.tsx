import React from "react";
import { Box } from "@mui/material";
import AddToCartButton from "./_components/AddToCartButton/AddToCartButton";
import ProductAttributes from "./_components/ProductAttributes/ProductAttributes";
export default function ProductCardBottom() {
  return (
    <Box
      sx={{
        width: "80%",
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ProductAttributes />
      <AddToCartButton />
    </Box>
  );
}
