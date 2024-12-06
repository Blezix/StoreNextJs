import React from "react";
import { Box } from "@mui/material";
import ProductCardTop from "./_components/ProductCardTop/ProductCardTop";
import ProductCardBottom from "./_components/ProductCardBottom/ProductCardBottom";

export default function ProductCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexBasis: "20%",
        height: "50%",
      }}
    >
      <ProductCardTop />
      <ProductCardBottom />
    </Box>
  );
}
