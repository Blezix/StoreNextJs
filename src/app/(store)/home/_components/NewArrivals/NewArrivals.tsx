import React from "react";
import { Box } from "@mui/material";
import NewArrivalsText from "./_components/NewArrivalsText/NewArrivalsText";
import ProductGroupBox from "./_components/ProductsGroupBox/ProductGroupBox";
import NewArrivalsButton from "./_components/NewArrivalsButton/NewArrivalsButton";
export default function NewArrivals() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "150vh",
        p: 3,
      }}
    >
      <NewArrivalsText />
      <ProductGroupBox />
      <NewArrivalsButton />
    </Box>
  );
}
