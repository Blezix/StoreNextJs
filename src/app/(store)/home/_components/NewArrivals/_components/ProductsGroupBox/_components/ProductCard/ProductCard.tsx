import React from "react";
import { Box } from "@mui/material";
import ProductCardTop from "./_components/ProductCardTop/ProductCardTop";
import ProductCardBottom from "./_components/ProductCardBottom/ProductCardBottom";
interface Props {
  ProductName: string;
  ProductPrice: number;
  imgSrc: string;
}
const ProductCard: React.FC<Props> = ({
  ProductName,
  ProductPrice,
  imgSrc,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexBasis: "20%",
        height: "50%",
        p: 2,
      }}
    >
      <ProductCardTop imgSrc={imgSrc} />
      <ProductCardBottom
        ProductName={ProductName}
        ProductPrice={ProductPrice}
      />
    </Box>
  );
};

export default ProductCard;
