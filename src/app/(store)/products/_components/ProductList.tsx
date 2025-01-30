import React from "react";
import { Box } from "@mui/material";
import { Product } from "../data/products";
import ProductCard from "./ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
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
