import React from "react";
import { Box } from "@mui/material";
import { Product } from "../data/products";
import ProductCard from "@/app/_components/ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "90%",
        m: `auto`,
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          ProductName={product.name}
          ProductPrice={product.price}
          imgSrc={product.imgSrc}
        />
      ))}
    </Box>
  );
};

export default ProductList;
