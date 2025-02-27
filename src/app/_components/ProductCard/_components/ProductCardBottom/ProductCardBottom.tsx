import React from "react";
import { Box } from "@mui/material";
import AddToCartButton from "./_components/AddToCartButton/AddToCartButton";
import ProductAttributes from "./_components/ProductAttributes/ProductAttributes";

interface Props {
  ProductName: string;
  ProductPrice: number;
  imgSrc: string;
  sizes: string[];
}

const ProductCardBottom: React.FC<Props> = ({
  ProductName,
  ProductPrice,
  imgSrc,
    sizes
}) => {
  const product = { ProductName, ProductPrice, imgSrc, sizes };

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
      <AddToCartButton product={product} />
    </Box>
  );
};

export default ProductCardBottom;
