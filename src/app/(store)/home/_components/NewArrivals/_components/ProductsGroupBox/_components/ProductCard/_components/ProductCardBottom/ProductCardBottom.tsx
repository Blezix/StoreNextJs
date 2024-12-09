import React from "react";
import { Box } from "@mui/material";
import AddToCartButton from "./_components/AddToCartButton/AddToCartButton";
import ProductAttributes from "./_components/ProductAttributes/ProductAttributes";


interface Props {
    ProductName: string;
    ProductPrice: number;
}
const ProductCardBottom: React.FC<Props> = ({ ProductName,ProductPrice })=> {


  return (
    <Box
      sx={{
        width: "90%",
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ProductAttributes ProductName={ProductName} ProductPrice={ProductPrice}/>
      <AddToCartButton />
    </Box>
  );
}

export default ProductCardBottom