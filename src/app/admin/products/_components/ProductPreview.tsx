import React from "react";
import { Box } from "@mui/material";
import ProductImage from "@/app/(store)/products/[slug]/_components/ProductImage";
import ProductDescription from "@/app/(store)/products/[slug]/_components/ProductDescription";
import { Product } from "@/app/types";

interface ProductPreviewProps {
  product: Product;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2,
        bgcolor: "white",
        color: "black",
      }}
    >
      <Box
        sx={{
          width: "85%",
          display: "flex",
          flexDirection: "row",
          height: "80%",
          flexWrap: "wrap",
        }}
      >
        <ProductImage imgSrc={product.imgSrc} />
        <ProductDescription product={product} />
      </Box>
    </Box>
  );
};

export default ProductPreview;
