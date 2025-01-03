"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "./data"; // Assuming data is in the same folder
import { filterProducts } from "../lib/filterProducts";
import ProductCard from "@/app/(store)/home/_components/NewArrivals/_components/ProductsGroupBox/_components/ProductCard/ProductCard";
import { Box } from "@mui/material";
const ProductFiltersPage = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug")?.split("&"); // e.g., "electronics,low-high,popularity"

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (slug) {
      const [category, price, sort] = slug;
      const filters = { category, price, sort };
      const result = filterProducts(products, filters);
      setFilteredProducts(result);
      console.log(result);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center ",
        alignItems: "center",
        width: "95%",
        mr: "auto",
        ml: "auto",
        height: "80%",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            imgSrc={product.imgSrc}
            ProductName={product.ProductName}
            ProductPrice={product.ProductPrice}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </Box>
  );
};

export default ProductFiltersPage;
