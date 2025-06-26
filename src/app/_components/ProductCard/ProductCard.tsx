import React from "react";
import { Box } from "@mui/material";
import ProductCardTop from "./_components/ProductCardTop/ProductCardTop";
import ProductCardBottom from "./_components/ProductCardBottom/ProductCardBottom";
interface Props {
  ProductName: string;
  ProductPrice: number;
  imgSrc: string[];
  sizes: string[];
  slug: string;
}

const ProductCard: React.FC<Props> = ({
  ProductName,
  ProductPrice,
  imgSrc,
  slug,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexBasis: {
          xs: "100%",
          sm: "50%",
          md: "33.33%",
          lg: "25%",
          xl: "20%",
        },
        height: {
          xs: "auto",
          sm: "auto",
          md: "auto",
          lg: "450px",
          xl: "500px",
        },
        p: 2,
        maxHeight: "50%",
      }}
    >
      <ProductCardTop imgSrc={imgSrc[0]} slug={slug} />
      <ProductCardBottom
        ProductName={ProductName}
        ProductPrice={ProductPrice}
      />
    </Box>
  );
};

export default ProductCard;
