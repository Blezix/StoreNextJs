import React from "react";
import { Box } from "@mui/material";
import ProductAttributes from "./_components/ProductAttributes/ProductAttributes";

interface Props {
  ProductName: string;
  ProductPrice: number;
}

const ProductCardBottom: React.FC<Props> = ({ ProductName, ProductPrice }) => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ProductAttributes
        ProductName={ProductName}
        ProductPrice={ProductPrice}
      />
    </Box>
  );
};

export default ProductCardBottom;
